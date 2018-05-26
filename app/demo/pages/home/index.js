import {React,PageView,Menu,PopView,Input,Form,Select,Views,Row,Col} from "react-bricks"
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
      {label:"Grid",key:'xxxxxxx'},
      {label:"Layout",key:'xxxxxxx'},
      {label:"Button",key:'xxxxxxx',href:"/home/button"},
      {label:"Icon",key:'xxxxxxx'},
      {label:"Form",key:"xxx"},
      {label:"Input",key:'xxxxxxx',href:"/home/input"},
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
    console.log(params);
    if(params.itemData.href){
      this.props.navigation.navigate(params.itemData.href,{test:'Lucy'});
    }
  }

  add(formProps){
    formProps.form.store.Lists.push({});
  }

  render() {
    return (
      <div>
        <div style={{height:60,width:'100%'}}></div>
        <div>
          <Row>
            <Col offset={{md:2}} span={{ xs: 8, sm: 8, md: 6, lg: 6 }}>11</Col>
            <Col span={{ xs: 8, sm: 8, md: 6, lg: 6 }}>11</Col>
            <Col span={{ xs: 8, sm: 8}}>111</Col>
          </Row>
          <div style={{width:140,height:'100%',float:'left'}}>
          <Menu onItemClick={this.MenuItemClick.bind(this)} data={menudata}/>
          </div>
          <div style={{marginLeft:120}}>
            <PopView style={{display:'inline-block'}} mode='click' mouseLeaveHide={true} renderContent={this.renderPopView.bind(this)}><button>click</button></PopView>
            <PopView style={{display:'inline-block'}} mode='hover' mouseLeaveHide={true} renderContent={this.renderPopView.bind(this)}><button>hover</button></PopView>
            <button onClick={this.go.bind(this)}>Go</button>
            <Form renderContent={(formProps)=>{
              return (
                <div>
                  <FormItem {...formProps} rule={[]} dataKey='inputValue' com={Input}  />
                  <FormItem {...formProps} rule={[]} initialValue='200' dataKey='inputValue1' com={Input}  />
                  <FormItem rule={[
                    {message:'必填!',regex:'required'},
                    {message:'小于10',regex:(val)=>{
                      if(val>10){
                        return false;
                      }
                      return true;
                    }}
                  ]} {...formProps} dataKey='selectorValue' com={Select}  />
                  <FormRepeat initialValue={[{name:"hxz"}]} {...formProps} dataKey='Lists' renderRow={(rowProps)=>{
                    return (
                      <div>
                          <FormItem {...rowProps} dataKey='name' label={"姓名"} com={Input}/>
                          <FormItem {...rowProps} dataKey='name1' com={Input}/>
                      </div>
                    );
                  }} />
                  <button onClick={this.add.bind(this,formProps)}>添加</button>
                </div>);
            }}/>
            
            <Views {...this.props} owner={this}/>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeScreen;