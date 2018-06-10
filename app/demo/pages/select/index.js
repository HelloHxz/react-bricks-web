import {React,PageView,observer,PageContainer,Modal,Button,Select} from "react-bricks-web"

@PageView()
class SelectDemo extends React.PureComponent {

  componentDidMount() {
  }

  constructor(props){
    super(props);
    this.state={
        visible:false
    }
  }

  render() {
    return <div>
       <Select
       label="下拉框"
       data={[
         {label:'xx2',value:'xxxx1x'},
         {label:'xx3',value:'xxxxx2'},
         {label:'xx4',value:'xxxxx3'},
         {label:'xxx5',children:[
           {label:'xxx6',value:'xxxx4'}
         ]}
       ]}
       hideMode="mouseleave" placeholder='请选择' style={{width:300}} dropdownStyle={{width:350}}/>
       <Select placeholder='请选择'/>
    </div>
  }
}

export default SelectDemo;