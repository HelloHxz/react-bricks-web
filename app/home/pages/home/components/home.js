import {React,Image,Row,Button} from "react-bricks-web"
import BkImage from '../../../imgs/bk.jpg';
import './home.less';

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
                  <span className='class-card-status'>开发中</span>
                  <span className='class-card-title'>
                  Bricks PC Web</span>
                  <p>
                      用于构建PC端中后台管理系统,包含丰富的组件让您快速轻松的开发体验. 采用<a href='https://reactjs.org/'>React</a>/<a href='https://mobx.js.org/'>Mobx</a>作为开发技术栈
                  </p>
                  <div className='class-card-bottom'>
                    
                    <a href='./index.html'><Button type='primary'>Demo</Button></a>
                    <a href='https://github.com/HelloHxz/react-bricks-web'><Button>github</Button></a>
                 </div>
                </div>
              </Row.Col>
              <Row.Col span={{sm:24,md:12,lg:6}}>
                <div className='class-card'>
                <span className='class-card-status'>实验中</span>
                  <span className='class-card-title'>Bricks Mobile Web & Native</span>
                  <p>
                       一套代码用于构建IOS,Android,Mobile Web的组件库,采用
                       <a href='https://reactjs.org/'>React</a>/
                       <a href='https://facebook.github.io/react-native/'>React Native</a>/
                       <a href='https://mobx.js.org/'>Mobx</a>作为开发技术栈
                  </p>
                 <div className='class-card-bottom'>
                    <Button type='primary'>Demo</Button>
                    <a href='https://github.com/HelloHxz/react-bricks'><Button>github</Button></a>
                 </div>
                </div>
              </Row.Col>
              <Row.Col span={{sm:24,md:12,lg:6}}>
                <div className='class-card'>
                <span className='class-card-status'>规划中</span>
                  <span className='class-card-title'>Bricks Desktop</span>
                  <p>
                      结合Bricks PC Web用于构建PC客户端应用,采用
                      <a href='https://reactjs.org/'>React</a>/
                      <a href='https://electronjs.org/'>Electron</a>/
                      <a href='https://mobx.js.org/'>Mobx</a>
                      作为技术栈.
                  </p>
                  <div className='class-card-bottom'>
                    <Button disabled type='primary'>Demo</Button>
                    <Button disabled>github</Button>
                 </div>
                </div>
              </Row.Col>
              <Row.Col span={{sm:24,md:12,lg:6}}>
                <div className='class-card'>
                <span className='class-card-status'>幻想中</span>
                  <span className='class-card-title'>Bricks Super Example</span>
                  <p>
                      使用Bricks UI 开发的全端的超级DEMO,以IM为核心,包括企业动态,审批,通讯录...等企业管理应用
                  </p>
                  <div className='class-card-bottom'>
                    <Button disabled type='primary'>Demo</Button>
                    <Button disabled>github</Button>
                 </div>
                </div>
              </Row.Col>
            </Row>
           </div>
        </div>
        <div className='feature-warpper'>
            <div className='right-tri-bk'></div>
            <p className='feature-title'>重复的组件化</p>
            <span className='feature-desc'>使用Bricks UI 开发的全端的超级DEMO,以IM为核心,包括企业动态,审批使用Bricks UI 开发的全端的超级DEMO,以IM为核心,包括企业动态,审批
            使用Bricks UI 开发的全端的超级DEMO,以IM为核心,包括企业动态,审批
            </span>
        </div>
        <div className='feature-warpper bw'>
            <div className='right-tri-bk'></div>
            <p className='feature-title'>组件的最佳实践化</p>
            <span className='feature-desc'>使用Bricks UI 开发的全端的超级DEMO,以IM为核心,包括企业动态,审批使用Bricks UI 开发的全端的超级DEMO,以IM为核心,包括企业动态,审批
            使用Bricks UI 开发的全端的超级DEMO,以IM为核心,包括企业动态,审批
            </span>
        </div>
        <div className='feature-warpper'>
            <div className='right-tri-bk'></div>
            <p className='feature-title'>我们的定位</p>
            <span className='feature-desc'>使用Bricks UI 开发的全端的超级DEMO,以IM为核心,包括企业动态,审批使用Bricks UI 开发的全端的超级DEMO,以IM为核心,包括企业动态,审批
            使用Bricks UI 开发的全端的超级DEMO,以IM为核心,包括企业动态,审批
            </span>
        </div>
        <div className='feature-warpper bw'>
            <div className='right-tri-bk'></div>
            <p className='feature-title'>我们想的更多</p>
            <span className='feature-desc'>使用Bricks UI 开发的全端的超级DEMO,以IM为核心,包括企业动态,审批使用Bricks UI 开发的全端的超级DEMO,以IM为核心,包括企业动态,审批
            使用Bricks UI 开发的全端的超级DEMO,以IM为核心,包括企业动态,审批
            </span>
        </div>
        <div className='footer'></div>
        </React.Fragment>
    );
  }
}

export default HomeScreen;