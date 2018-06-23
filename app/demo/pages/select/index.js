import {React,PageView,observer,PageContainer,Modal,Button,Select} from "react-bricks-web"

@PageView()
class SelectDemo extends React.PureComponent {

  componentDidMount() {
  }

  constructor(props){
    super(props);
    this.state={
        visible:false,
        value:null
    }
  }

  handleOnChange(value,params){
    this.setState({value});
  }

  render() {
    return <div>
       <Select
       label="下拉框"
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
       <Select placeholder='请选择'/>
    </div>
  }
}

export default SelectDemo;