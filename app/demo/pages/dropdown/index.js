import {React,PageView,observer,PageContainer,Row,DropDown} from "react-bricks-web";
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
        ]}><a>下拉</a></DropDown>

        <DropDown mode='click' data={[
          {label:'剪切',key:'cut'},
          {label:'复制',key:'copy'},
          {label:'粘贴',key:'paste'},
          {label:'删除',key:'delete'},
        ]}><a>点击</a></DropDown>
    </div>
  }
}

export default DropDownDemo;