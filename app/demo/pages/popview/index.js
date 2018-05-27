import {React,PageView,observer,PageContainer,Modal,Button,Select,PopView} from "react-bricks"

@PageView()
class PopViewDemo extends React.PureComponent {

  componentDidMount() {
  }

  constructor(props){
    super(props);
    this.state={
        visible:false
    }
  }

  test(context){
    context.hide();
  }
  renderPopView(context){
    return <div style={{height:200,width:100,backgroundColor:'red'}}><span style={{color:'green'}}>Pop Everything</span><Button onClick={this.test.bind(this,context)}>Click</Button></div>
  }


  render() {
    return <div>
        <PopView style={{display:'inline-block'}} mode='click' mouseLeaveHide={true} renderContent={this.renderPopView.bind(this)}><Button>click</Button></PopView>
        <PopView style={{display:'inline-block'}} mode='hover' mouseLeaveHide={true} renderContent={this.renderPopView.bind(this)}><Button>hover</Button></PopView>
    </div>
  }
}

export default PopViewDemo;