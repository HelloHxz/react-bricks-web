import {React,PageView,observer,PageContainer,XZ,Button} from "react-bricks-web"



@PageView()
class BottomDemo extends React.PureComponent {

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
    return <div>BottomDemo
      <Button onClick={()=>{
        XZ.go();
      }}>log</Button>
      <Button type='primary'>Primary</Button>
      <Button size='sm' type='primary'>Primary</Button>
      <Button size='lg' type='primary'>Primary</Button>
    </div>
  }
}

export default BottomDemo;