import {React,PageView,Image,Tabs,Input,Form,Select,RouteView,Row,Modal,Button,VBox,HBox,XZ} from "react-bricks-web"
import './aboutus.less';

class AboutUsPage extends React.PureComponent {

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
          <div className='aboutus-top'>
            {this.renderWTFPL()}
            <p className='aboutus-top-title'>About us</p>
            <p className='aboutus-top-desc'>
            我们有一个专业的团队来维护当前项目的设计,开发,测试.多年的企业应用开发经验积累,让我们想的更多...想的更远...</p>
          </div>
        </React.Fragment>
    );
  }
}

export default AboutUsPage;