import {React,PageView,observer,PageContainer,XZ,Button,Image} from "bricks-web"

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
    const image2Name = '/1.jpg';
    const path = '../../imgs';
    const img = require('../../imgs'+ image1Name);
    const img2 = require('../../imgs' + image2Name);
    return <div style={{height:'100%',overflow:'auto'}}>
        <Image style={{width:200,height:400}} resizeMode="contain" src={img}/>
        <Image style={{width:200,height:400}} resizeMode="stretch" src={img}/>
        <Image style={{width:200,height:400}} resizeMode="cover" src={img}/>
        <Image style={{width:200,height:400}} resizeMode="orgin" src={img}/>

        <Image style={{width:330,height:400}} resizeMode="contain" src={img2}/>
        <Image style={{width:330,height:400}} resizeMode="stretch" src={img2}/>
        <Image style={{width:330,height:400}} resizeMode="cover" src={img2}/>
        <Image style={{width:330,height:400}} resizeMode="orgin" src={img2}/>
    </div>
  }
}

export default ImageDemo;