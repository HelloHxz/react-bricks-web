import {React,PageView,Menu,PopView,Input,Form,Select,Views,Row,Col,Modal} from "react-bricks"
import './index.less';
import HomeStore from './store'
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
      {label:"CheckBox",key:'xxxxxxx'},
      {label:"CheckList",key:'xxxxxxx'},
      {label:"Radio",key:'xxxxxxx'},
      {label:"PopView",key:'xxxxxxx'},
      {label:"Model",key:'xxxxxxx'},
      {label:"Select",key:'xxxxxxx'},
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


@PageView
class HomeScreen extends React.Component {

  static connectStore(){
    return {homestore:new HomeStore}
  }

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
    console.log(this.props.homestore);
    this.props.navigation.navigate("button");
  }

  onPageBeforeLeave(params){
    if(params.action==="后退"){
      return false;
    }
    return true;
  }

  test(context){
    context.hide();
  }

  renderPopView(context){
    return <div style={{height:200,width:100,backgroundColor:'red'}}><span style={{color:'green'}}>Pop Everything</span><button onClick={this.test.bind(this,context)}>Click</button></div>
  }

  MenuItemClick(params){
    if(params.itemData.href){
      this.props.navigation.navigate(params.itemData.href,{test:'Lucy'});
    }
  }

  render() {
    return (
      <div>
        <div style={{height:60,width:'100%'}}></div>
        <div>
          <div style={{width:140,height:'100%',float:'left'}}>
          <Menu onItemClick={this.MenuItemClick.bind(this)} data={menudata}/>
          </div>
          <div style={{marginLeft:120}}>
            <PopView style={{display:'inline-block'}} mode='click' mouseLeaveHide={true} renderContent={this.renderPopView.bind(this)}><button>click</button></PopView>
            <PopView style={{display:'inline-block'}} mode='hover' mouseLeaveHide={true} renderContent={this.renderPopView.bind(this)}><button>hover</button></PopView>
            <button onClick={this.go.bind(this)}>Go</button>
           
            
            <Views {...this.props} owner={this}/>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeScreen;