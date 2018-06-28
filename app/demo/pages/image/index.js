import {React,PageView,observer,PageContainer,XZ,Button,Image} from "react-bricks-web"

@PageView()
class ImageDemo extends React.PureComponent {

  componentDidMount() {
  }

  constructor(props){
    super(props);
  }

  goBack(){
    this.props.navigation.goBack();
  }


  onPageBeforeLeave(params){
    if(params.action==="后退"){
      return true;
    }
  }


  render() {
    const image1Name = '/timg.jpg';
    const img = require('../../imgs' + image1Name);
    return <div style={{height:'100%',overflow:'auto'}}>
        <Image style={{width:200,height:400}} resizeMode="contain" src={img}/>
        <Image style={{width:200,height:400}} resizeMode="stretch" src={img}/>
        <Image style={{width:200,height:400}} resizeMode="cover" src={img}/>

        <Image style={{width:330,height:400}} resizeMode="contain" src={require('../../imgs/1.jpg')}/>
        <Image style={{width:330,height:400}} resizeMode="stretch" src={require('../../imgs/1.jpg')}/>
        <Image style={{width:330,height:400}} resizeMode="cover" src={require('../../imgs/1.jpg')}/>
    </div>
  }
}

export default ImageDemo;