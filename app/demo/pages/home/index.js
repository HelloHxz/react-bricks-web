import {React,PageView,Menu,PopView,Input,Form,Select,RouteView,Row,Col,Modal,Button,VBox} from "react-bricks"
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
        <VBox>
          <VBox.Panel height={100}>header</VBox.Panel>
          <VBox.Panel>
            <LeftMenu {...this.props} />
            <div style={{ overflow:'hidden'}}>
              <Button onClick={this.go.bind(this)}>Go</Button>
              <RouteView {...this.props} owner={this}/>
            </div>
          </VBox.Panel>
          <VBox.Panel height={80}>footer</VBox.Panel>
        </VBox>
    );
  }
}

export default HomeScreen;