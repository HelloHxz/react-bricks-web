import {React,PageView,observer,PageContainer,Tabs,XZ,Button,Group,Select,Input,Form} from "react-bricks-web";
import './index.less';



@PageView()
class BottomDemo extends React.PureComponent {

  componentDidMount() {
  }

  constructor(props){
    super(props);
    this.state={
        visible:false,
        value:"111xxxxx",
        selectedKey1:'code'
    }
  }

  handleOnChange(value,params){
    this.setState({value});
  }
  tabOnChange = (data,params) => {
    this.setState({selectedKey1: data.key});
  }

  renderItem(key){
      if(key==='code'){
          console.log("renderItemCode");
          return (
            <div style={{padding:10,height:'100%',overflow:'auto'}}>
                <Group>
                <Button type='primary'>第一</Button>
                <Button style={{borderLeft:'none'}}>第二</Button>
                <Button>第三</Button>
            </Group>
            <br />
            <br />
            <Group>
                <Button>第一</Button>
                <Button>第二</Button>
            </Group>
            <br />
            <br />
            <Group>
                <Select
                value={this.state.value}
                data={[
                    {label:'xx2',value:'xxxx1x'},
                    {label:'xx3',value:'xxxxx2'},
                    {label:'xx4',value:'xxxxx3'},
                    {label:'分组1',group:[
                    {label:'22222',value:'xxxx4'}
                    ]},
                    {label:'分组2',group:[
                    {label:'哈哈',value:'xxxx41'}
                    ]}
                ]}
                onChange={this.handleOnChange.bind(this)}
                hideMode="mouseleave" placeholder='请选择' style={{width:300}} dropdownStyle={{width:350}}/>
                <Button>第二</Button>
            </Group>
            <br />
            <br />
            <Group>
                <Button>第一</Button>
                <Input placeholder='请输入'/>
            </Group>
            <br />
            <br />
            <Group>
                <Select
                value={this.state.value}
                data={[
                    {label:'xx2',value:'xxxx1x'},
                    {label:'xx3',value:'xxxxx2'},
                    {label:'xx4',value:'xxxxx3'},
                ]}
                onChange={this.handleOnChange.bind(this)}
                hideMode="mouseleave" placeholder='请选择' style={{width:100}} dropdownStyle={{width:150}}/>
                <Input style={{width:360}} placeholder='请输入'/>
            </Group>
            <br />
            <br />
        </div>
        );
      }
      return <div>{key}</div>;
  }

  render() {
      return <Tabs style={
         { height:'100%'}
      } renderItem={this.renderItem.bind(this)} tabClassName='pages-tabs'
        size='lg' 
        indicator={null}
        tabStyle={{borderBottom:'2px solid #1890ff'}}
        selectedKey={this.state.selectedKey1} 
        onChange={this.tabOnChange.bind(this)} 
        data={[
            {label:"代码示例",key:'code'},
            {label:"知识点讲解",key:'knowdge'},
    ]} />;
  }
}

export default BottomDemo;