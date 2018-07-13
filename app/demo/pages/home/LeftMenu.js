import {React,observer,PageView,Menu,PopView,Input,Form,Select,Views,Row,Col,Modal,Button} from "react-bricks-web"

@observer
class LeftMenu extends React.Component {

  MenuItemClick(params){
    if(params.itemData.key){
      this.props.navigation.navigate(params.itemData.key,{test:'Lucy'});
    }
  }

  render() {
    return (
        <Menu withURLChange={true} style={{width:'100%'}} collapsed={this.props.collapsed} onItemClick={this.MenuItemClick.bind(this)} data={this.props.baseStore.MenuData}/>
    );
  }
}

export default LeftMenu;