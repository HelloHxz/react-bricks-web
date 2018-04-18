import {React,PageView,observer,PageContainer} from "react-bricks"



@observer
@PageView
class BottomDemo extends React.Component {

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
      <PageContainer {...this.props} owner={this}/>
    </div>
  }
}

export default BottomDemo;