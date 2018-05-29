import {React,PageView,observer,PageContainer,Input} from "react-bricks"

@PageView()
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
        <div style={{maxWidth:600}}>
           <Input label='姓名' />
           <Input label='姓名' />
        </div>
        
    </div>
  }
}

export default InputDemo;