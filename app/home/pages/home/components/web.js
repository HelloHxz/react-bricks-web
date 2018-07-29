import {React,PageView,Image,Tabs,Input,Form,Select,RouteView,Row,Modal,Button,VBox,HBox,XZ} from "react-bricks-web"
import './web.less';

class WebPage extends React.PureComponent {
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
            <p className='web-top-title'>Bricks Web</p>
            <i style={{position:'absolute',top:57,right:180,fontSize:60,color:'#2094b3'}} className='icon iconfont icon-ie'/>
            <i style={{position:'absolute',bottom:0,right:270,fontSize:60,color:'#2094b3'}} className='icon iconfont icon-edge'/>
            <i style={{position:'absolute',top:80,right:60,fontSize:50,color:'#2094b3'}} className='icon iconfont icon-firefox'/>
            <i style={{position:'absolute',bottom:70,right:320,fontSize:70,color:'#2094b3'}} className='icon iconfont icon-opera'/>
            <i style={{position:'absolute',bottom:130,right:390,fontSize:70,color:'#2094b3'}} className='icon iconfont icon-safari'/>
            <i style={{position:'absolute',top:100,right:290,fontSize:80,color:'#2094b3'}} className='icon iconfont icon-chrome'/>
            <i style={{position:'absolute',right:0,bottom:-30,fontSize:320,color:'#2094b3'}} className='icon iconfont icon-pc'/>
            <p className='web-top-desc'>专注PC Web 端组件封装,用于构建专业的企业中后台管理应用,是我们多年企业开发经验以及集各大家之所长之所得,让开发者更好的开发体验或从其中得到一些启示</p>
            {this.renderWTFPL()}
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

export default WebPage;