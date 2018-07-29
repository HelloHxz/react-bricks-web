import {React,PageView,Image,Tabs,Input,Form,Select,RouteView,Row,Modal,Button,VBox,HBox,XZ} from "react-bricks-web"
import './desktop.less';

class DeskTopPage extends React.PureComponent {

  renderWTFPL(){
        const spans = [];
        for(let i=0;i<1000;i+=1){
            spans.push(<span key={i}>WTFPL</span>);
        }
        return <div className='wtfpl web-wtfpl'>{spans}</div>;
  }
  render() {
    return (
        <React.Fragment>
          <div className='desktop-top'>
            {this.renderWTFPL()}
            <p className='desktop-top-title'>Bricks Desktop</p>
            <p className='desktop-top-desc'>
             使用Electron结合Bricks PC Web快速构建桌面端应用,
              是我们多年企业开发经验以及集各大家之所长之所得,让开发者更好的开发体验或从其中得到一些启示</p>
          </div>
          <div className='page-body'>
          <Row style={{ paddingLeft:20,paddingRight:20 }} gutter={20}>
              <Row.Col span={{sm:24,md:12,lg:6}}>
                <div className='class-card'>
                  <span className='class-card-title'>
                  丰富灵活的组件</span>
                  <p>
                      用于构建PC端中后台管理系统,包含丰富的组件让您快速轻松的开发体验. 采用<a href='https://reactjs.org/'>React</a>/<a href='https://mobx.js.org/'>Mobx</a>作为开发技术栈
                  </p>
                </div>
              </Row.Col>
              <Row.Col span={{sm:24,md:12,lg:6}}>
                <div className='class-card'>
                  <span className='class-card-title'>兼容IE9</span>
                  <p>
                       一套代码用于构建IOS,Android,Mobile Web的组件库,采用
                       <a href='https://reactjs.org/'>React</a>/
                       <a href='https://facebook.github.io/react-native/'>React Native</a>/
                       <a href='https://mobx.js.org/'>Mobx</a>作为开发技术栈
                  </p>
                </div>
              </Row.Col>
              <Row.Col span={{sm:24,md:12,lg:6}}>
                <div className='class-card'>
                  <span className='class-card-title'>灵活的主题配置</span>
                  <p>
                      结合Bricks PC Web用于构建PC客户端应用,采用
                      <a href='https://reactjs.org/'>React</a>/
                      <a href='https://electronjs.org/'>Electron</a>/
                      <a href='https://mobx.js.org/'>Mobx</a>
                      作为技术栈.
                  </p>
                </div>
              </Row.Col>
              <Row.Col span={{sm:24,md:12,lg:6}}>
                <div className='class-card'>
                  <span className='class-card-title'>稳定强大的API</span>
                  <p>
                      使用Bricks UI 开发的全端的超级DEMO,以IM为核心,包括企业动态,审批,通讯录...等企业管理应用
                  </p>
                </div>
              </Row.Col>
            </Row>
          </div>
        </React.Fragment>
    );
  }
}

export default DeskTopPage;