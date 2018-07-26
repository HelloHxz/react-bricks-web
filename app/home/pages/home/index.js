import {React,PageView,Image,Tabs,Input,Form,Select,RouteView,Row,Col,Modal,Button,VBox,HBox,XZ} from "react-bricks-web"
import './index.less';
import BkImage from '../../imgs/bk.jpg';

@PageView()
class HomeScreen extends React.PureComponent {

  componentDidMount() {
  }
  constructor(props){
    super(props);
  }



  render() {
    return (
      <div>
        <Tabs 
            defaultSelectedKey='home'
            size='lg'
            data={[
                {label:"首页",key:'home'},
                {label:"React Bricks Web",key:'email'},
                {label:"React Bricks Native",key:'info'},
           ]} />
        <div className='home-top'>
          <Image style={{ width:300,height:300 }} src={BkImage} resizeMode="contain" />
          <div className='title-content'><span className='main-title'>拥抱React 拥抱全端</span></div>
        </div>
        <div className='home-body'></div>
      </div>
    );
  }
}

export default HomeScreen;