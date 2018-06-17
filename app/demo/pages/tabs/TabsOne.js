import {React,PageView,PageContainer,observer,Modal,Button,Select,Tabs} from "react-bricks-web"

@observer
class TabsOne extends React.Component {

  tabOnChange = (data,params) => {
    this.props.tabsstore.selectedKey = data.key;
  }

  renderItem1 = (key)=>{
    return <div>{key}</div>
  }

  add = ()=>{
    var key = new Date().valueOf().toString();
    this.props.tabsstore.TabsData.push({key:key,label:"new"});
  }

  Modify = ()=>{
    this.props.tabsstore.TabsData[0].label = 'xxx';
  }


  render() {
    return <React.Fragment>
        <Button type='primary' onClick={this.add.bind(this)}>add</Button>
        <Button type='primary' onClick={this.Modify.bind(this)}>Modify</Button>
        <Tabs onChange={this.tabOnChange.bind(this)} selectedKey={this.props.tabsstore.selectedKey} data={this.props.tabsstore.TabsData} />
        <Tabs.Container cache={true} renderItem={this.renderItem1.bind(this)} selectedKey={this.props.tabsstore.selectedKey} data={this.props.tabsstore.TabsData}/>
    </React.Fragment>
  }
}

export default TabsOne;