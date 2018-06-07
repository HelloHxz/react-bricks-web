import React from 'react';
import PopView from '../popview';
import Theme from '../theme';
import './index.less';

export default class ToolTip extends React.Component{
    renderPopView(params){
        const clsArr = ['xz-tooltip-wrapper']
        if(this.props.overlayClassName){
            clsArr.push(this.props.overlayClassName);
        }
        return <div className={clsArr.join(' ')}>
            <div className={`xz-tooltip-arrow xz-tooltip-arrow-${params.placement}`}></div>
            <div className='xz-tooltip-inner'>ToolTipToolTipToolTipToolTip</div>
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
                    {...this.props}
                    ref={(instance)=>{this.root = instance;}}
                    mouseLeaveHide={true} 
                    onShow = {this.onShow.bind(this)}
                    onHide = {this.onHide.bind(this)}
                    renderContent={this.renderPopView.bind(this)}
                >
                    {this.props.children}
                </PopView>)
        ;
    }
}