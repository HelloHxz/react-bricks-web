import {React,PageView,observer,PageContainer,XZ,Button,HBox} from "react-bricks-web"



@PageView()
class HBoxDemo extends React.PureComponent {

  componentDidMount() {
  }

  constructor(props){
    super(props);
    this.state={
        leftPanelStatus:null
    }
  }

  goBack(){
    this.props.navigation.goBack();
  }


  onPageBeforeLeave(params){
    if(params.action==="后退"){
      return true;
    }
  }

  changeLeftStatus(status){
      this.setState({leftPanelStatus:status});
  }


  render() {
    return <div>
        <HBox style={{height:200}}>
            <HBox.Panel status={this.state.leftPanelStatus} style={{width:300,backgroundColor:'#7dbcea'}}>1</HBox.Panel>
            <HBox.Panel style={{backgroundColor:'rgba(16, 142, 233, 1)'}}>2</HBox.Panel>
            <HBox.Panel style={{width:200,backgroundColor:'#7dbcea'}}>3</HBox.Panel>
        </HBox>
        <Button type='primary' onClick={this.changeLeftStatus.bind(this,'popshow')} style={{marginRight:10,marginTop:20}}>popShow</Button>
        <Button type='primary' onClick={this.changeLeftStatus.bind(this,'pophide')} style={{marginRight:10,marginTop:20}}>popHide</Button>
        <Button type='primary' onClick={this.changeLeftStatus.bind(this,'dock')} style={{marginRight:10,marginTop:20}}>dock</Button>
        <Button type='primary' onClick={this.changeLeftStatus.bind(this,'slideshow')} style={{marginRight:10,marginTop:20}}>slideShow</Button>
        <Button type='primary' onClick={this.changeLeftStatus.bind(this,'slidehide')} style={{marginRight:10,marginTop:20}}>slideHide</Button>
    </div>
  }
}

export default HBoxDemo;