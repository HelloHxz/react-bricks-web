import {React,observer,PageView,Menu,PopView,Input,Form,Select,Views,Row,Col,Modal,Button} from "react-bricks-web"

@observer
class LeftMenu extends React.Component {

  MenuItemClick(params){
    if(params.itemData.href){
      this.props.navigation.navigate(params.itemData.href,{test:'Lucy'});
    }
  }

  render() {
    return (
        <Menu withURLChange={true} style={{width:'100%'}} collapsed={this.props.homestore.menuCollapsed} onItemClick={this.MenuItemClick.bind(this)} data={this.props.baseStore.MenuData}/>
    );
  }
}

export default LeftMenu;