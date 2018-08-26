import {React,PageView,observer,PageContainer,XZ,Button,Image} from "bricks-web"

@PageView()
class Login extends React.PureComponent {

  componentDidMount() {
  }

  constructor(props){
    super(props);
  }

  render() {
    return <div style={{height:'100%',overflow:'auto'}}>
        <Button type='primary' onClick={()=>{
            this.props.navigation.replace('home')
        }}>登录</Button>
    </div>
  }
}

export default Login;