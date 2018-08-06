import {React,PageView,observer,PageContainer,message,Button} from "bricks-web"



@PageView()
class MessageDemo extends React.PureComponent {

  componentDidMount() {
  }

  constructor(props){
    super(props);
  }


  render() {
    return <div>Message
      <Button onClick={()=>{
          const messid = message.show(<div style={{color:'red'}}>dashaogua</div>);
      }}>log</Button>
    </div>
  }
}

export default MessageDemo;