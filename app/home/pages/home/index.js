import {React,PageView,Image,Tabs,Input,Form,Select,RouteView,Row,Modal,Button,VBox,HBox,XZ} from "react-bricks-web"
import './index.less';
import Web from './components/web';
import Home from './components/home';
import Desktop from './components/desktop';
import Mobile from './components/mobile';
import Example from './components/example';
import AboutUS from './components/aboutus';
import '../../icon/iconfont.css';

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
    }else if(key==='desktop'){
      return <Desktop/>
    }else if(key==='mobile'){
      return <Mobile/>;
    }else if(key==='example'){
      return <Example/>;
    }
    else if(key==='about'){
      return <AboutUS/>;
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
                {label:"Bricks Mobile Web & Bricks Native",key:'mobile'},
                {label:"Bricks Desktop",key:'desktop'},
                {label:"Bricks Super Example",key:'example'},
                {label:"关于我们",key:'about'},
           ]} />
      </div>
    );
  }
}

export default HomeScreen;