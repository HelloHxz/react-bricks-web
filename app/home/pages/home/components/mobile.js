import {React,PageView,Image,Tabs,Input,Form,Select,RouteView,Row,Modal,Button,VBox,HBox,XZ} from "react-bricks-web"
import './mobile.less';

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
          <div className='mobile-top'>
              {this.renderWTFPL()}
              <p className='mobile-top-title'>React Bricks Mobile</p>
              <p className='mobile-top-desc'>专注移动端组件封装,用于构建专业的手机端移动应用,
              一套代码构建IOS.Android.HTML5应用,
              是我们多年企业开发经验以及集各大家之所长之所得,让开发者更好的开发体验或从其中得到一些启示</p>
          </div>
        </React.Fragment>
    );
  }
}

export default HomeScreen;