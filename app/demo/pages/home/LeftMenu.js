import {React,PageView,Menu,PopView,Input,Form,Select,Views,Row,Col,Modal,Button} from "react-bricks"
import {observer} from "mobx-react";

@observer
class LeftMenu extends React.Component {

  MenuItemClick(params){
    if(params.itemData.href){
      this.props.navigation.navigate(params.itemData.href,{test:'Lucy'});
    }
  }

  render() {
    return (
    <div style={{height:'100%',float:'left'}}>
        <Menu collapsed={this.props.homestore.menuCollapsed} onItemClick={this.MenuItemClick.bind(this)} data={this.props.baseStore.MenuData}/>
      </div>
    );
  }
}

export default LeftMenu;