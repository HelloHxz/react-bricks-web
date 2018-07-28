import {React,PageView,Image,Tabs,Input,Form,Select,RouteView,Row,Modal,Button,VBox,HBox,XZ} from "react-bricks-web"
import './mobile.less';
import BkImage from '../../../imgs/mobile-bk.jpg';

class HomeScreen extends React.PureComponent {

  render() {
    return (
        <React.Fragment>
          <div className='mobile-top'>
            <Image style={{ width:'100%' ,height:'100%',zIndex:1 }} src={BkImage} resizeMode="contain" />
            <div className='mobile-top-wrapper'>
                <p className='mobile-top-title'>React Bricks Mobile</p>
                <p className='mobile-top-desc'>专注移动端组件封装,用于构建专业的手机端移动应用,
                一套代码构建IOS.Android.HTML5应用,
                是我们多年企业开发经验以及集各大家之所长之所得,让开发者更好的开发体验或从其中得到一些启示</p>
            </div>
          </div>
        </React.Fragment>
    );
  }
}

export default HomeScreen;