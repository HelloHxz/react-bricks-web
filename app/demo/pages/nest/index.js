import {React,PageView,PageContainer} from "react-bricks"


@PageView
class nest extends React.Component {

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
    return <div>nest
    </div>
  }
}

export default nest;