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
        </React.Fragment>
    );
  }
}

export default DeskTopPage;