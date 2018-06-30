import {React,PageView,observer,PageContainer,XZ,Button,VBox} from "react-bricks-web"



@PageView()
class VBoxDemo extends React.PureComponent {

  componentDidMount() {
  }

  constructor(props){
    super(props);
  }

  goBack(){
    this.props.navigation.goBack();
  }


  onPageBeforeLeave(params){
    if(params.action==="后退"){
      return true;
    }
  }


  render() {
    return <div>
        <VBox style={{height:400}}>
            <VBox.Panel style={{height:100,backgroundColor:'#7dbcea'}}>1</VBox.Panel>
            <VBox.Panel style={{backgroundColor:'rgba(16, 142, 233, 1)'}}>2</VBox.Panel>
            <VBox.Panel style={{height:100,backgroundColor:'#7dbcea'}}>3</VBox.Panel>
        </VBox>
    </div>
  }
}

export default VBoxDemo;