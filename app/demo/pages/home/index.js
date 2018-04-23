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
    return (
      <div>
        <div style={{height:60,width:'100%'}}></div>
        <div>
          <div style={{width:120,height:'100%',float:'left'}}>
          <Menu data={this.menudata}/>
          </div>
          <div style={{marginLeft:120}}>
            <button onClick={this.go.bind(this)}>Go</button>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeScreen;