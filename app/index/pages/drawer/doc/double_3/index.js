import {React,PageView,observer,VBox,Drawer,Button,message} from "bricks-web";
import './index.less';

class Example extends React.PureComponent {

  componentDidMount() {
  }

  constructor(props){
    super(props);
    this.state={
        parentShow:false,
        childrenShow:false,
    }
  }


  show(){
      this.setState({
        parentShow:true
      });
  }

  hide(){
    // 因为遮罩层fixed被translate影响 所以子Drawer的遮罩层不能覆盖全部
    if(this.state.childrenShow){
        this.hideChildren();
        return;
    }
    this.setState({
        parentShow:false
    });
  }

  showTwo = ()=>{
    Drawer.show(<div>sssss</div>);
  }

  ShowOther = ()=>{
      this.setState({
        childrenShow:true
      });
  }

  hideChildren = ()=>{
    this.setState({
      childrenShow:false
    });
}


  render() {
    return <div>
        <Drawer onHide={this.hide.bind(this)} className={this.state.childrenShow?'demo-drawer-offset':'demo-drawer-offset-reset'} show={this.state.parentShow}>
            <VBox>
                <VBox.Panel style={{height:50}}>1</VBox.Panel>
                <VBox.Panel style={{ borderTop:'1px solid #eee',borderBottom:'1px solid #eee'}}>
                    <Button type='primary' onClick={this.ShowOther.bind(this)}>ShowOther</Button>
                    <Drawer onHide={this.hideChildren.bind(this)} show={this.state.childrenShow}>
                        <VBox>
                            <VBox.Panel style={{height:50}}>1</VBox.Panel>
                            <VBox.Panel style={{ borderTop:'1px solid #eee',borderBottom:'1px solid #eee'}}>
                              <Button type='primary' onClick={this.hideChildren.bind(this)}>Hide</Button>
                            </VBox.Panel>
                            <VBox.Panel style={{height:50,paddingTop:10,paddingLeft:30}}>
                                
                            </VBox.Panel>
                        </VBox>
                    </Drawer>
                </VBox.Panel>
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