import {React,PageView,observer,PageContainer,XZ,Button,Group,Select,Input,Form} from "react-bricks-web";
import './index.less';



@PageView()
class BottomDemo extends React.PureComponent {

  componentDidMount() {
  }

  constructor(props){
    super(props);
    this.state={
        visible:false,
        value:"111xxxxx"
    }
  }

  handleOnChange(value,params){
    this.setState({value});
  }


  render() {
    return <div style={{padding:10,height:'100%',overflow:'auto'}}>
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
  }
}

export default BottomDemo;