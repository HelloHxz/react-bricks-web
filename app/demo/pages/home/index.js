import {React,PageView,observer,Menu} from "react-bricks"
import './index.less';


@PageView
class HomeScreen extends React.Component {
  componentDidMount() {
  }
  constructor(props){
    super(props);

    this.menudata = [

    ];
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
      <Menu data={this.menudata}/>
      <button onClick={this.go.bind(this)}>Go</button>
    </div>
  }
}

export default HomeScreen;