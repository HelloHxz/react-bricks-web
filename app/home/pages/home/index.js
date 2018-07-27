import {React,PageView,Image,Tabs,Input,Form,Select,RouteView,Row,Modal,Button,VBox,HBox,XZ} from "react-bricks-web"
import './index.less';
import BkImage from '../../imgs/bk.jpg';

@PageView()
class HomeScreen extends React.PureComponent {

  componentDidMount() {
  }
  constructor(props){
    super(props);
  }

  renderWTFPL(){
    const spans = [];
    for(let i=0;i<1000;i+=1){
      spans.push(<span key={i}>WTFPL</span>);
    }
    return <div className='wtfpl'>{spans}</div>;
  }

  render() {
    return (
      <div>
        <Tabs 
            defaultSelectedKey='home'
            size='lg'
            tabClassName='top-tabs'
            data={[
                {label:"首页",key:'home'},
                {label:"Bricks Web",key:'email'},
                {label:"Bricks Mobile Web & Bricks Native",key:'info'},
                {label:"Bricks Desktop",key:'electron'},
                {label:"Bricks Super Example",key:'superdemo'},
                {label:"关于我们",key:'about'},
           ]} />
        <div className='home-top'>
           {this.renderWTFPL()}
          <Image style={{ width:300,height:300 }} src={BkImage} resizeMode="contain" />
          <div className='title-content'>
            <span className='main-title'>Bricks UI</span>
            <span className='sub-title'>拥抱React&nbsp;&nbsp;&nbsp;&nbsp;拥抱Bricks&nbsp;&nbsp;&nbsp;&nbsp;拥抱全端&nbsp;&nbsp;</span>
          </div>
        </div>
        <div className='home-body'>
           <div className='class-card-wrapper'>
            <Row gutter={20}>
              <Row.Col span={{sm:24,md:12,lg:6}}>
                <div className='class-card'>
                  <span>Bricks PC Web</span>
                  <span>开发中</span>
                </div>
              </Row.Col>
              <Row.Col span={{sm:24,md:12,lg:6}}>
                <div className='class-card'>
                  <span>Bricks Mobile Web & Bricks Mobile Native</span>
                  <span>实验中</span>
                </div>
              </Row.Col>
              <Row.Col span={{sm:24,md:12,lg:6}}>
                <div className='class-card'>
                  <span>Bricks Desktop</span>
                  <span>实验中</span>
                </div>
              </Row.Col>
              <Row.Col span={{sm:24,md:12,lg:6}}>
                <div className='class-card'>
                  <span>Bricks Super Example</span>
                  <span>规划中</span>
                </div>
              </Row.Col>
            </Row>
           </div>
        </div>
        <div className='feature-warpper'></div>
        <div className='footer'></div>
      </div>
    );
  }
}

export default HomeScreen;