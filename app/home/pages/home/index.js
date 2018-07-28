import {React,PageView,Image,Tabs,Input,Form,Select,RouteView,Row,Modal,Button,VBox,HBox,XZ} from "react-bricks-web"
import './index.less';
import Web from './components/web';
import Home from './components/home';

@PageView()
class HomeScreen extends React.PureComponent {

  componentDidMount() {
  }
  constructor(props){
    super(props);
  }

  renderItem(key){
    if(key==='home'){
      return <Home />
    }else if(key==='web'){
      return <Web />
    }
    return <div>{key}</div>;
  }


  render() {
    return (
      <div>
        <Tabs 
            defaultSelectedKey='home'
            size='lg'
            renderItem={this.renderItem.bind(this)}
            tabClassName='top-tabs'
            data={[
                {label:"首页",key:'home'},
                {label:"Bricks Web",key:'web'},
                {label:"Bricks Mobile Web & Bricks Native",key:'app'},
                {label:"Bricks Desktop",key:'electron'},
                {label:"Bricks Super Example",key:'superdemo'},
                {label:"关于我们",key:'about'},
           ]} />
      </div>
    );
  }
}

export default HomeScreen;