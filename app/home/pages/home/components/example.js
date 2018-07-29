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
            <i style={{position:'absolute',right:0,bottom:-30,fontSize:320,color:'#8e7c6c'}} className='icon iconfont icon-jimushizuzhuang'/>
            <p className='example-top-title'>Bricks Super Example</p>
            <p className='example-top-desc'>
            使用Bricks UI开发的超级DEMO,用来证明Bricks UI的开发能力,能够适用不同的开发业务场景,
            贯穿全端开发</p>
          </div>
        </React.Fragment>
    );
  }
}

export default ExamplePage;