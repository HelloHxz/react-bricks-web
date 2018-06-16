import {React,PageView,observer,PageContainer,Modal,Button,Select,Tabs} from "react-bricks-web"

@PageView()
class TabsDemo extends React.PureComponent {

  componentDidMount() {
  }

  constructor(props){
    super(props);
    this.state={
        visible:false,
        selectedKey1:'home'
    }
  }


  unControlChange = (record,param)=>{

  }

  tabOnChange = (data,params) => {
    this.setState({selectedKey1: data.key});
  }

  render() {
    return <div>
        <Tabs onChange={this.tabOnChange.bind(this)} selectedKey={this.state.selectedKey1} data={[
            {label:"首页",key:'home',allowClose:true},
            {label:"邮箱",key:'email',allowClose:true},
            {label:"动态",key:'info',allowClose:true},
        ]}>
        </Tabs>
        <Tabs selectedKey='home' onChange={this.unControlChange.bind(this)} size='sm' data={[
             {label:"首页",key:'home',allowClose:true},
             {label:"邮箱",key:'email',allowClose:true},
             {label:"动态",key:'info',allowClose:true},
        ]}>
        </Tabs>
        <Tabs size='lg' data={[
             {label:"首页",key:'home',allowClose:true},
             {label:"邮箱",key:'email',allowClose:true},
             {label:"动态",key:'info',allowClose:true},
        ]}>
        </Tabs>
    </div>
  }
}

export default TabsDemo;