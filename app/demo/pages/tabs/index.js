import {React,PageView,observer,PageContainer,Modal,Button,Select,Tabs} from "react-bricks-web";
import TabsOne from './TabsOne';
import TabsStore from './store';

@PageView({tabsstore:new TabsStore})
class TabsDemo extends React.Component {

  componentDidMount() {
  }

  constructor(props){
    super(props);
    this.state={
        visible:false,
        selectedKey1:'home',
        data1:[
          {label:"首页",key:'home',allowClose:true},
          {label:"邮箱",key:'email',allowClose:true},
          {label:"动态",key:'info',allowClose:true},
      ]
    }
  }


  unControlChange = (record,param)=>{

  }

  tabOnChange = (data,params) => {
    this.setState({selectedKey1: data.key});
  }

  renderItem1 = (key)=>{
    return <div>{key}</div>
  }

  add = ()=>{
    var key = new Date().valueOf().toString();
    this.state.data1.push({key:key,label:"new"});
    this.setState({
      data1:this.state.data1,
      selectedKey1:key
    })
  }

  modify = () => {
    this.state.data1[0].label="ssss";
    this.setState({
      data1:this.state.data1,
    })
  }

  render() {
    return <div style={{overflow:"auto",height:'100%'}}>
        <div>
          <Button onClick={this.add.bind(this)}>Add</Button>
          <Button onClick={this.modify.bind(this)}>Modify</Button>
        </div>
        <br/>
        <Tabs selectedKey='home' onChange={this.unControlChange.bind(this)} size='sm' data={[
             {label:"首页",key:'home',allowClose:true},
             {label:"邮箱",key:'email',allowClose:true},
             {label:"动态",key:'info',allowClose:true},
        ]}>
        </Tabs>
        <br/>
        <Tabs size='lg' data={[
             {label:"首页",key:'home',allowClose:true},
             {label:"邮箱",key:'email',allowClose:true},
             {label:"动态",key:'info',allowClose:true},
        ]} />
        <br/>
          <Tabs size='lg' data={[
              {label:"首页",key:'home',allowClose:true},
              {label:"邮箱",key:'email',allowClose:true},
              {label:"动态",key:'info',allowClose:true},
          ]} />
        <br/>
        <br/>
        <Tabs selectedKey={this.state.selectedKey1} size='lg' direction='vertical' data={[
              {label:"首页",key:'home',allowClose:true},
              {label:"邮箱",key:'email',allowClose:true},
              {label:"动态",key:'info',allowClose:true},
          ]} />
        <br/>
        <Tabs style={{width:500}} onChange={this.tabOnChange.bind(this)} selectedKey={this.state.selectedKey1} data={this.state.data1} />
        <Tabs.Container cache={true} renderItem={this.renderItem1.bind(this)} selectedKey={this.state.selectedKey1} data={this.state.data1}/>
        <br/>
       <TabsOne {...this.props}/>
    </div>
  }
}

export default TabsDemo;