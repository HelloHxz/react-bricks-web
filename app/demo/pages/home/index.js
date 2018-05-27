import {React,PageView,Menu,PopView,Input,Form,Select,Views,Row,Col,Modal} from "react-bricks"
import './index.less';
import HomeStore from './store';
import BaseStore from '../baseLayout/store';
import {observer} from "mobx-react";

const FormRepeat = Form.FormRepeat;
const FormItem = Form.FormItem;




const menudata = [
  {
  icon:'',
  label:'关于',
  key:'xxxxx',
  href:'home/about'
},
{
  label:'快速上手',
  key:'xxxxx',
  href:"/home"
},
{
  label:"组件",
  key:"xxxxxxxx",
  children:[
      {label:"Grid",key:'xx',href:'/home/grid'},
      {label:"Layout",key:'xxxxxxx'},
      {label:"Button",key:'xxxxxxx',href:"/home/button"},
      {label:"Icon",key:'xxxxxxx'},
      {label:"Form",key:"xxx",href:'home/form'},
      {label:"Input",key:'xxxxxxx',href:"/home/input"},
      {label:"Modal",key:'xxxxxxx',href:"/home/modal"},
      {label:"Message",key:'xxxxxxx',href:"/home/message"},
      {label:"CheckBox",key:'xxxxxxx'},
      {label:"CheckList",key:'xxxxxxx'},
      {label:"Radio",key:'xxxxxxx'},
      {label:"PopView",key:'xxxxxxx'},
      {label:"Select",key:'xxxxxxx',href:'home/select'},
      {label:"PopView",key:'xxxxxxx',href:'home/popview'},
      {label:"Tabs",key:'xxxxxxx'},
      {label:"Table",key:'xxxxxxx'},
      {label:"Tree",key:'xxxxxxx'},
      {label:"Menu",key:'xxxxxxx',children:[
          {label:'2.2.1',key:'xxxxxxxx'},
          {label:'2.2.2',key:'xxxxxxxx'}
      ]},
  ]
},
{
  label:'页面路由',
  key:'xxxxx',
},
{
  label:'生命周期',
  key:'xxxxx',
},
{
  label:'数据状态',
  key:'frfrf',children:[
      {label:"Mobx",key:'xxxxxxx'},
      {label:"AJAX",key:'xxxxxxx',children:[
          {label:'4.2.1',key:'xxxxxxxx'},
          {label:'4.2.2',key:'xxxxxxxx'}
      ]},
  ]
},
{
  label:'异步加载',
  key:'xxxxx',
},{
  label:'打包发布',
  key:'xxxxx',
},

];


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
        <div style={{height:60,width:'100%'}}></div>
        <div>
          <div style={{width:140,height:'100%',float:'left'}}>
          <Menu onItemClick={this.MenuItemClick.bind(this)} data={menudata}/>
          </div>
          <div style={{marginLeft:120}}>
          
            <button onClick={this.go.bind(this)}>Go</button>
           
            
            <Views {...this.props} owner={this}/>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeScreen;