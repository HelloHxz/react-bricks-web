import {React,PageView,observer,PageContainer,Modal,Button} from "react-bricks"

@PageView
class ModalDemo extends React.Component {

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
    this.setState({
        visible:false
    });
  }


  render() {
    return <div>
        <Modal visible={this.state.visible}>
            asdasdasad
            <Button onClick={this.hide.bind(this)}>Close</Button>
        </Modal>
        <Button onClick={this.show.bind(this)}>Show</Button>
    </div>
  }
}

export default ModalDemo;