import {React,PageView,observer,PageContainer,message} from "react-bricks"



@PageView()
class MessageDemo extends React.PureComponent {

  componentDidMount() {
  }

  constructor(props){
    super(props);
  }


  render() {
    return <div>Message
      <button onClick={()=>{
          message.show({
              content:'xxxxxx'
          });
      }}>log</button>
    </div>
  }
}

export default MessageDemo;