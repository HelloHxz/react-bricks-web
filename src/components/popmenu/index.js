import  React from 'react';
import Common from '../../utils/common';
import PopView from '../popview';
import './index.less';


class PopMenu extends React.Component {
    onShow(){

    }
    onHide(){

    }
    renderPopView(){
        const data = this.props.data || [];
        const children = [];
        for(let i = 0,j=data.length;i<j;i+=1){
            const item = data[i];
            if(item.children && item.children.length>0){
                children.push(<PopMenu parentPopview={this.root} key={i} data={item.children}>
                    <div>{item.label}</div>
                </PopMenu>);
            }else{
                children.push(<MenuItem key={i} data={item} />);
            }
        }
        return <div className='xz-popmenu-section'>{children}</div>
    }
    render(){
        return (
            <PopView 
                mode={this.props.mode||'hover'}
                positionMode='absolute'
                parentPopview={this.props.parentPopview}
                ref={(instance)=>{this.root = instance;}}
                placement={this.props.placement||'right'}
                onShow = {this.onShow.bind(this)}
                onHide = {this.onHide.bind(this)}
                offset = {{x: 2}}
                renderContent={this.renderPopView.bind(this)}
            >
                {this.props.children}
            </PopView>);
    }
}

class MenuItem extends React.Component{
    render(){
        return <div>Item</div>
    }
}

export default PopMenu;
