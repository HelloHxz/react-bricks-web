import {React,PageView,observer} from "react-bricks"



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
      <button onClick={this.go.bind(this)}>Go</button>
    </div>
  }
}

export default HomeScreen;