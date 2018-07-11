import {React,PageView,observer,PageContainer,Input} from "react-bricks-web"

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
           <br/>
           <Input label='姓名' size='sm' />
           <br/>
           <Input label='姓名' size='lg' />
        </div>
        
    </div>
  }
}

export default InputDemo;