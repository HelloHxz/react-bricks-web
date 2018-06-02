import {React,PageView,observer,PageContainer,Modal,Button,message} from "react-bricks"

@PageView()
class ModalDemo extends React.PureComponent {

  componentDidMount() {
  }

  constructor(props){
    super(props);
    this.state={
        visible:false
    }
  }


  show(){
      this.setState({
          visible:true
      });
  }

  hide(){
    // message.show("show");
    this.setState({
        visible:false
    });
  }

  showTwo = ()=>{
      Modal.show(<div>sssss</div>);
  }


  render() {
    return <div>
        <Modal visible={this.state.visible}>
            asdasdasad
            <Button onClick={this.hide.bind(this)}>Close</Button>
        </Modal>
        <Button onClick={this.show.bind(this)}>Show</Button>

        <Button onClick={this.showTwo.bind(this)}>Modal.show</Button>
    </div>
  }
}

export default ModalDemo;