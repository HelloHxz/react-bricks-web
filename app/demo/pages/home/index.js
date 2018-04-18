import {React,PageView,observer} from "react-bricks"
import './index.less';

class PopLayer extends React.Component{

  refLoad(ref){
    console.log(ref);
    ref.onmousewheel = function(event) {

      if(event.wheelDelta<0){
        if(ref.scrollTop+ref.offsetHeight>=ref.scrollHeight){
          event.stopPropagation();
          event.preventDefault();
        }
      }else{
        if(ref.scrollTop<=0){
          event.stopPropagation();
          event.preventDefault();
        }
      }
  };
  ref.addEventListener("DOMMouseScroll", function(event) {
      if(event.detail>0){
        if(ref.scrollTop+ref.offsetHeight>=ref.scrollHeight){
          event.stopPropagation();
          event.preventDefault();
        }
      }else{
        if(ref.scrollTop<=0){
          event.stopPropagation();
          event.preventDefault();
        }
      }
  });
  }
  render(){
    return (<div className='p-wrapper' ref={this.refLoad.bind(this)}><div style={{width:"2px",height:'1000px',backgroundColor:'green'}}></div></div>);
  }
}


@observer
@PageView
class HomeScreen extends React.Component {

  componentDidMount() {
  }

  constructor(props){
    super(props);
  }

  goBack(){
    this.props.navigation.goBack();
  }

  go(){
    this.props.navigation.navigate("buttonDemo/nest",{test:'Lucy'});
  }


  onPageBeforeLeave(params){
    if(params.action==="后退"){
      return false;
    }
    return true;
  }


  render() {
    return <div>home
      <PopLayer/>
      <div style={{height:'1000px',width:"100px",overflow:'auto'}}></div>
      <button onClick={this.go.bind(this)}>Go</button>
    </div>
  }
}

export default HomeScreen;