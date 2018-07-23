import {React,PageView,observer,PageContainer,XZ,Button,Icon,Tabs} from "react-bricks-web"
import MD from '../../components/md';
import mdtext from './index.md';


@PageView()
class BottomDemo extends React.PureComponent {
  componentDidMount() {
  }
  constructor(props){
    super(props);
  }

  goBack(){
    this.props.navigation.goBack();
  }


  onPageBeforeLeave(params){
    if(params.action==="后退"){
      return true;
    }
  }

  renderItem(key){
    if(key==='code'){
      return this.renderCode();
    }
    return <div>{key}</div>
  }
  renderCode() {
    return <div>
      <Button onClick={()=>{
        XZ.go();
      }}>log</Button>
        <MD source={mdtext} />
      
      <Button type='primary'>Primary</Button>
      <Button size='sm' type='primary'>Primary</Button>
      <Button size='lg' type='primary'>Primary</Button>
      <br/> <br/>
      <Button size='lg' type='primarytext'>Primary</Button>
      <br/> <br/>
      <Button size='sm' type='primarytext'><Icon text='Primary' customIcon='iconfont icon-desktop'/></Button>
      <br/> <br/>
      <Button>
        <Icon type='questioncircleo' text='图标'/>
      </Button>
      <br/>
      <br/> 
      <Button type='primarytext'>
        <Icon type='questioncircleo'/>
      </Button>
      <br/>
      <br/>
      <Button>
        <Icon type='questioncircleo'/>
      </Button>
      <br/>
      <br/>
      <Button type='primary'>
        <Icon type='questioncircleo' text='图标'/>
      </Button>
      <br/>
      <br/>
      <Button type='primary'>
        <Icon type='down' text='图标' textPlacement='left'/>
      </Button>
    </div>
  }

  render(){
      return <Tabs style={
          { height:'100%'}
      } renderItem={this.renderItem.bind(this)} 
        size='lg' 
        tabStyle={{
          textAlign:'center',
          borderBottom:'1px solid #ccc'
        }}
        defaultSelectedKey='code'
        data={[
            {label:"代码示例",key:'code'},
            {label:"知识点讲解",key:'knowdge'},
    ]} />;
  }
}

export default BottomDemo;