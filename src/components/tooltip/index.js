import React from 'react';
import PopView from '../popview';
import Theme from '../theme';
import './index.less';

export default class ToolTip extends React.Component{

    _getArrowLeft = (params)=>{
        if(params.visibility===false){
            return {};
        }
        let style = null;
        if(params.placement==='topleft'){
            style = { right:params.triggerRect.width/2};
        }else if(params.placement==='topright'){
            style = { left:params.triggerRect.width/2};
        }else if(params.placement==='righttop'){
            style = { bottom:params.triggerRect.height/2};
        }else if(params.placement==='rightbottom'){
            style = { top:params.triggerRect.height/2};
        }else if(params.placement ==='bottomleft'){
            style = { right:params.triggerRect.width/2};
        }else if(params.placement ==='bottomright'){
            style = { left:params.triggerRect.width/2};
        }else if(params.placement==='leftbottom'){
            style = { top:params.triggerRect.height/2};
        }else if(params.placement ==='lefttop'){
            style = { bottom:params.triggerRect.height/2};
        }

        if(style === null){
            return {};
        }
        return { style }
    }
    renderPopView(params){
        const clsArr = ['xz-tooltip-wrapper']
        if(this.props.overlayClassName){
            clsArr.push(this.props.overlayClassName);
        }
        const arrowStyle = this._getArrowLeft(params);
        return <div className={clsArr.join(' ')}>
            <div {...arrowStyle} className={`xz-tooltip-arrow xz-tooltip-arrow-${params.placement}`}></div>
            <div className='xz-tooltip-inner'>
                {this.props.title}
            </div>
        </div>;
    }
    onChange(){

    }
    onShow(){
    }
    onHide(){
    }
    render(){
        const popWrapperClassName = this.props.popWrapperClassName || '';
        return (
                <PopView 
                    mode='hover' 
                    {...this.props}
                    popWrapperClassName={`xz-tooltip-overlayer ${popWrapperClassName}`}
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