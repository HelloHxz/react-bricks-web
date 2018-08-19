import {React,PageView,observer,VBox,Drawer,Button,message} from "bricks-web"

class Example extends React.PureComponent {

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
    Drawer.show(<div>sssss</div>);
  }


  render() {
    return <div>
        <Drawer show={this.state.show}>
            <VBox className='demoVBox'>
                <VBox.Panel style={{height:50}}>1</VBox.Panel>
                <VBox.Panel style={{ borderTop:'1px solid #eee',borderBottom:'1px solid #eee'}}>2</VBox.Panel>
                <VBox.Panel style={{height:50,paddingTop:10,paddingLeft:30}}>
                    <Button type='primary' onClick={this.hide.bind(this)}>OK</Button>
                    <Button style={{ marginLeft:10 }} onClick={this.hide.bind(this)}>Cancel</Button>
                </VBox.Panel>
            </VBox>
        </Drawer>
        <Button onClick={this.show.bind(this)}>Show</Button>

        <Button onClick={this.showTwo.bind(this)}>Drawer.show</Button>
    </div>
  }
}

export default Example;