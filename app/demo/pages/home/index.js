import {React,PageView,observer} from "react-bricks"
import './index.less';

class PopLayer extends React.Component{
  render(){
    return (<div className='p-wrapper'></div>);
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
      <div style={{height:'1000px',width:"100px"}}></div>
      <button onClick={this.go.bind(this)}>Go</button>
    </div>
  }
}

export default HomeScreen;