import {React,PageView,observer,PageContainer} from "react-bricks"

@PageView
class InputDemo extends React.PureComponent {

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
    return <div>
        InputDemo
    </div>
  }
}

export default InputDemo;