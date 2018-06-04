import React from 'react';
import PopView from '../popview';
import Theme from '../theme';
import './index.less';

export default class ToolTip extends React.Component{
    renderPopView(){
        return <div className='xz-tooltip-wrapper'>
            ToolTip
        </div>;
    }
    onChange(){

    }
    onShow(){
        console.log("show");
    }
    onHide(){
        console.log("hide");
    }
    render(){
        return (
                <PopView 
                    mode='hover' 
                    ref={(instance)=>{this.root = instance;}}
                    mouseLeaveHide={true} 
                    onShow = {this.onShow.bind(this)}
                    onHide = {this.onHide.bind(this)}
                    offset = {{x: 2,y:5}}
                    renderContent={this.renderPopView.bind(this)}
                    {...this.props}
                >
                    {this.props.children}
                </PopView>)
        ;
    }
}