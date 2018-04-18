import {React,PageView,observer} from "react-bricks"
import './index.less';

class PopLayer extends React.Component{

  refLoad(ref){
    if(!ref){return;}
    ref.onmousewheel = function(event) {
      event.stopPropagation();
      event.preventDefault();
      if(event.wheelDelta<0){
        ref.scrollTop = ref.scrollTop + 40;
      }else{
        ref.scrollTop = ref.scrollTop - 40;
      }
  };
  ref.addEventListener("DOMMouseScroll", function(event) {
    event.stopPropagation();
    event.preventDefault();
      if(event.detail>0){
        ref.scrollTop = ref.scrollTop + 40;
      }else{
        ref.scrollTop = ref.scrollTop - 40;
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