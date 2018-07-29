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
            <i style={{position:'absolute',top:57,right:180,fontSize:60,color:'#21acd0'}} className='icon iconfont icon-ie'/>
            <i style={{position:'absolute',bottom:0,right:270,fontSize:60,color:'#21acd0'}} className='icon iconfont icon-edge'/>
            <i style={{position:'absolute',top:80,right:60,fontSize:50,color:'#21acd0'}} className='icon iconfont icon-firefox'/>
            <i style={{position:'absolute',bottom:70,right:320,fontSize:70,color:'#21acd0'}} className='icon iconfont icon-opera'/>
            <i style={{position:'absolute',bottom:130,right:390,fontSize:70,color:'#21acd0'}} className='icon iconfont icon-safari'/>
            <i style={{position:'absolute',top:100,right:290,fontSize:80,color:'#21acd0'}} className='icon iconfont icon-chrome'/>
            <i style={{position:'absolute',right:0,bottom:-30,fontSize:320,color:'#21acd0'}} className='icon iconfont icon-pc'/>
            <p className='web-top-desc'>专注PC Web 端组件封装,用于构建专业的企业中后台管理应用,是我们多年企业开发经验以及集各大家之所长之所得,让开发者更好的开发体验或从其中得到一些启示</p>
            {this.renderWTFPL()}
          </div>
        </React.Fragment>
    );
  }
}

export default WebPage;