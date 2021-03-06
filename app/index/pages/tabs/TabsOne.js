import {React,PageView,PageContainer,observer,Modal,Button,Select,Tabs,message} from "bricks-web"

@observer
class TabsOne extends React.Component {

  tabOnChange = (data,params) => {
    this.props.tabsstore.selectedKey = data.key;
  }

  renderItem1 = (key)=>{
    return <div style={{padding:10}}><Button onClick={()=>{message.show(key)}}>{key}</Button></div>
  }

  add = ()=>{
    var key = new Date().valueOf().toString();
    this.props.tabsstore.TabsData.push({key:key,label:"new"});
  }

  Modify = ()=>{
    this.props.tabsstore.TabsData[0].label = 'xxx';
  }

  Replace = ()=>{
    var key = new Date().valueOf().toString();
    this.props.tabsstore.TabsData.splice(1,1,{key,label:key});
    this.props.tabsstore.selectedKey = key;

  }


  render() {
    return <React.Fragment>
        <Button type='primary' onClick={this.add.bind(this)}>add</Button>
        <Button type='primary' onClick={this.Modify.bind(this)}>Modify</Button>
        <Button type='primary' onClick={this.Replace.bind(this)}>Replace</Button>
        <br/>   <br/>
        <Tabs type='card' renderItem={this.renderItem1.bind(this)} onChange={this.tabOnChange.bind(this)} selectedKey={this.props.tabsstore.selectedKey} data={this.props.tabsstore.TabsData} />
    </React.Fragment>
  }
}

export default TabsOne;