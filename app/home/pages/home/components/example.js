import {React,PageView,Image,Tabs,Input,Form,Select,RouteView,Row,Modal,Button,VBox,HBox,XZ} from "react-bricks-web"
import './example.less';

class ExamplePage extends React.PureComponent {

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
          <div className='example-top'>
            {this.renderWTFPL()}
            <i style={{position:'absolute',right:0,bottom:-30,fontSize:320,color:'#8a7a6c'}} className='icon iconfont icon-jimushizuzhuang'/>
            <p className='example-top-title'>Bricks Super Example</p>
            <p className='example-top-desc'>
            使用Bricks UI开发的超级DEMO,用来证明Bricks UI的开发能力,能够适用不同的开发业务场景,
            贯穿全端开发</p>
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

export default ExamplePage;