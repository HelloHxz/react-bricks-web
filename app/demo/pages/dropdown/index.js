import {React,PageView,observer,PageContainer,Row,DropDown,Button,Icon} from "react-bricks-web";
import './index.less';

@PageView()
class DropDownDemo extends React.PureComponent {

  componentDidMount() {
  }

  constructor(props){
    super(props);
  }

  onItemClick(record,params){
    // return false;
  }

  render() {
    return <div style={{height:'100%',overflow:'auto'}}>
        <DropDown onItemClick={this.onItemClick.bind(this)} data={[
          {label:'剪切',key:'cut'},
          {label:'复制',key:'copy'},
          {label:'粘贴',key:'paste'},
          {label:'删除',key:'delete'},
          {label:'其他',key:'other',children:[
            {label:'保存',key:'save'},
            {label:'另存为',key:'saveAs'},
          ]},
        ]}> 
          <Button type='primary'>
            <Icon type='down' text='操作' textPlacement='left'/>
        </Button>
      </DropDown>
        <br/><br/>
        <DropDown mode='click' data={[
          {label:'剪切',key:'cut'},
          {label:'复制',key:'copy'},
          {label:'粘贴',key:'paste'},
          {label:'删除',key:'delete'},
          {label:'其他',key:'other',children:[
            {label:'保存',key:'save'},
            {label:'另存为',key:'saveAs'},
          ]},
        ]}>
          <Button type='primarytext'>
              <Icon type='down' text='操作' textPlacement='left'/>
          </Button>
        </DropDown>
    </div>
  }
}

export default DropDownDemo;