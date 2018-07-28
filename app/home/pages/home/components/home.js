import {React,PageView,Image,Tabs,Input,Form,Select,RouteView,Row,Modal,Button,VBox,HBox,XZ} from "react-bricks-web"
import BkImage from '../../../imgs/bk.jpg';

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
        </React.Fragment>
    );
  }
}

export default HomeScreen;