import {React,PageView,Menu,PopView,Input,Form,Select,Views,Row,Col,Modal,Button} from "react-bricks"
import './index.less';
import HomeStore from './store';
import BaseStore from '../basicLayout/store';
import {observer} from "mobx-react";
import LeftMenu from './LeftMenu';

const FormRepeat = Form.FormRepeat;
const FormItem = Form.FormItem;

@PageView({homestore:new HomeStore,baseStore:BaseStore})
class HomeScreen extends React.PureComponent {

  componentDidMount() {
  }
  constructor(props){
    super(props);
    this.seed= 1;
    this.state = {
      menuCollapsed:false
    };
  }

  goBack(){
    this.props.navigation.goBack();
  }

  go(){
    // this.props.homestore.test = "huxiaohzong";
    // console.log(this.props.homestore);
    // this.props.navigation.navigate("button");
    this.props.homestore.menuCollapsed = !this.props.homestore.menuCollapsed;
  }

  onPageBeforeLeave(params){
    if(params.action==="后退"){
      return false;
    }
    return true;
  }

  render() {
    return (
      <div>
        {this.props.baseStore.UserInfo.name}
        <div style={{display:'table',tableLayout:'fixed',width:'100%',height:40}}>
          <div style={{display:'table-cell',width:'40px',backgroundColor:'yellow'}}>1</div>
          <div style={{display:'table-cell',backgroundColor:'red'}}>2</div>
          <div style={{display:'table-cell',width:'40px',backgroundColor:'green'}}>2</div>
        </div>
        <div style={{height:60,width:'100%'}}></div>
        <div>
          <LeftMenu {...this.props} />
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