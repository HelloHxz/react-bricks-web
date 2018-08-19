import {React,PageView,observer,PageContainer,Modal,Button,message} from "bricks-web"

class ModalDemo extends React.PureComponent {

  componentDidMount() {
  }

  constructor(props){
    super(props);
    this.state={
        show:false
    }
  }


  show(){
      this.setState({
        show:true
      });
  }

  hide(){
    // message.show("show");
    this.setState({
        show:false
    });
  }

  showTwo = ()=>{
      Modal.show(<div>sssss</div>);
  }


  render() {
    return <div>
        <Modal show={this.state.show}>
            asdasdasad
            <Button onClick={this.hide.bind(this)}>Close</Button>
        </Modal>
        <Button onClick={this.show.bind(this)}>Show</Button>

        <Button onClick={this.showTwo.bind(this)}>Modal.show</Button>
    </div>
  }
}

export default ModalDemo;