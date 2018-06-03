import {React,PageView,Menu,PopView,Input,Form,Select,Views,Row,Col,Modal,Button} from "react-bricks"
import './index.less';
import HomeStore from './store';
import BaseStore from '../basicLayout/store';
import {observer} from "mobx-react";

const FormRepeat = Form.FormRepeat;
const FormItem = Form.FormItem;

@PageView({homestore:new HomeStore,baseStore:BaseStore})
class HomeScreen extends React.PureComponent {

  componentDidMount() {
  }
  constructor(props){
    super(props);
    this.seed= 1;
  }

  goBack(){
    this.props.navigation.goBack();
  }

  go(){
    this.props.homestore.test = "huxiaohzong";
    console.log(this.props.homestore);
    // this.props.navigation.navigate("button");
  }

  onPageBeforeLeave(params){
    if(params.action==="后退"){
      return false;
    }
    return true;
  }



  MenuItemClick(params){
    if(params.itemData.href){
      this.props.navigation.navigate(params.itemData.href,{test:'Lucy'});
    }
  }

  render() {
    return (
      <div>
        {this.props.baseStore.UserInfo.name}
        <i className="fas fa-camera-retro"></i>
        <div style={{height:60,width:'100%'}}></div>
        <div>
          <div style={{height:'100%',float:'left'}}>
          <Menu onItemClick={this.MenuItemClick.bind(this)} data={this.props.baseStore.MenuData}/>
          </div>
          <div style={{ overflow:'hidden'}}>
            <Button onClick={this.go.bind(this)}>Go</Button>
            <Views {...this.props} owner={this}/>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeScreen;