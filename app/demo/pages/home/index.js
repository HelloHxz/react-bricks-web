import {React,PageView,Menu,PopView,Input,Form,Select,RouteView,Row,Col,Modal,Button,VBox,HBox} from "react-bricks-web"
import './index.less';
import HomeStore from './store';
import BaseStore from '../basicLayout/store';
import LeftMenu from './LeftMenu';

const FormRepeat = Form.FormRepeat;
const FormItem = Form.FormItem;

@PageView({homestore:new HomeStore,baseStore:BaseStore},{o:true})
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
    this.props.baseStore.MenuData[0].label = "hahah";
    // this.props.homestore.menuCollapsed = !this.props.homestore.menuCollapsed;
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
         <VBox.Panel style={{height:50,backgroundColor:'#eee'}}>header
          <Button onClick={this.go.bind(this)}>Go</Button>
         </VBox.Panel>
         <VBox.Panel>
             <HBox style={{width:'100%',height:'100%'}}>
              <HBox.Panel style={{width:182}}>
                <div style={{overflow:'auto',height:'100%'}}>
                  <LeftMenu {...this.props} />
                </div>
              </HBox.Panel>
              <HBox.Panel>
                <RouteView {...this.props} owner={this}/>
              </HBox.Panel>
            </HBox>
         </VBox.Panel>
         <VBox.Panel style={{height:40,backgroundColor:'#ddd'}}>footer</VBox.Panel>
       </VBox>
    );
  }
}

export default HomeScreen;