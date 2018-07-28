import {React,PageView,Image,Tabs,Input,Form,Select,RouteView,Row,Modal,Button,VBox,HBox,XZ} from "react-bricks-web"
import './desktop.less';

class HomeScreen extends React.PureComponent {

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
          </div>
        </React.Fragment>
    );
  }
}

export default HomeScreen;