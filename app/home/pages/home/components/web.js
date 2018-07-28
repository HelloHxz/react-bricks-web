import {React,PageView,Image,Tabs,Input,Form,Select,RouteView,Row,Modal,Button,VBox,HBox,XZ} from "react-bricks-web"
import './web.less';
import BkImage from '../../../imgs/web-bk.jpg';

class HomeScreen extends React.PureComponent {

  render() {
    return (
        <React.Fragment>
          <div className='web-top'>
            <Image style={{ width:'100%' ,height:'100%',zIndex:1 }} src={BkImage} resizeMode="contain" />
            <div className='web-top-wrapper'>
                <p className='web-top-title'>React Bricks Web</p>
                <p className='web-top-desc'>专注PC Web 端组件封装,用于构建专业的企业中后台管理应用,是我们多年企业开发经验以及集各大家之所长之所得,让开发者更好的开发体验或从其中得到一些启示</p>
            </div>
          </div>
        </React.Fragment>
    );
  }
}

export default HomeScreen;