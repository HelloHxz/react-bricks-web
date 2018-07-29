import {React,PageView,Image,Tabs,Input,Form,Select,RouteView,Row,Modal,Button,VBox,HBox,XZ} from "react-bricks-web"
import './web.less';

class HomeScreen extends React.PureComponent {
    renderWTFPL(){
        const spans = [];
        for(let i=0;i<1000;i+=1){
            spans.push(<span key={i}>WTFPL</span>);
        }
        return <div className='wtfpl'>{spans}</div>;
    }
  render() {
    return (
        <React.Fragment>
          <div className='web-top'>
            <p className='web-top-title'>React Bricks Web</p>
            <p className='web-top-desc'>专注PC Web 端组件封装,用于构建专业的企业中后台管理应用,是我们多年企业开发经验以及集各大家之所长之所得,让开发者更好的开发体验或从其中得到一些启示</p>
            {this.renderWTFPL()}
          </div>
        </React.Fragment>
    );
  }
}

export default HomeScreen;