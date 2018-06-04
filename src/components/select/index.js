import React from 'react';
import PopView from '../popview';
import Theme from '../theme';
import './index.less';

// tabindex 才能是div获取onKeyDown事件
export default class Select extends React.Component{
    renderPopView(){
        let width = 200;
        if(this.root.root){
            width = this.root.root.offsetWidth-2;
        }
        return <div className='xz-select-dropdown' style={{ width:width,maxHeight:250 }}>
            <div className='xz-select-item xz-select-item-size-default'>
             1
            </div>
            <div className='xz-select-item xz-select-item-size-default'>
             2
            </div>
            <div className='xz-select-item xz-select-item-size-default'>
             3
            </div>
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
            <React.Fragment>
                <PopView 
                    mode='click' 
                    ref={(instance)=>{this.root = instance;}}
                    mouseLeaveHide={true} 
                    onShow = {this.onShow.bind(this)}
                    onHide = {this.onHide.bind(this)}
                    offset = {{x: 2}}
                    renderContent={this.renderPopView.bind(this)}
                >
                    <div className={`xz-select xz-select-size-${Theme.getConfig('size',this.props)}`}>
                        <span className='placeholder'>{this.props.placeholder}</span>
                    </div>
                </PopView>
            </React.Fragment>)
        ;
    }
}