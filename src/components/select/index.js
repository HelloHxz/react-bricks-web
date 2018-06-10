import React from 'react';
import PopView from '../popview';
import Theme from '../theme';
import './index.less';


class SelectItem extends React.Component {
    onClick(){
        this.props.root.clearTimeout();
        this.props.root.focus();
        // this.props.root.hide();
    }
    render(){
        return (<div onClick={this.onClick.bind(this)} className='xz-select-item xz-select-item-size-default'>
         2
       </div>);
    }
}

class OverLayer extends React.Component{
    render(){
        const className = `xz-select-dropdown ${this.props.dropdownClassName||''}`;
        const dropDownStyle = {
            ...{ width:'100%',maxHeight:250 },
            ...(this.props.dropdownStyle||{}),
        };
        return (
            <div className={className} style={dropDownStyle}>
                <SelectItem root={this.props.root}/>
                <SelectItem root={this.props.root}/>
                <SelectItem root={this.props.root}/>
                <SelectItem root={this.props.root}/>
            </div>
        );
    }
}

// tabindex 才能是div获取onKeyDown事件
export default class Select extends React.Component{
    renderPopView(){
        return <OverLayer root={this.root} {...this.props}/>;
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
        let style = {};
        if(this.props.style){
            style = {
                style:this.props.style
            };
        }
        return (
                <PopView 
                    {...this.props}
                    mode='click' 
                    placement='bottomright'
                    positionMode={this.props.positionMode||'absolute'}
                    ref={(instance)=>{this.root = instance;}}
                    hideMode={this.props.hideMode||'blur'}
                    onShow = {this.onShow.bind(this)}
                    onHide = {this.onHide.bind(this)}
                    showDelay={this.props.showDelay||0}
                    hideDelay={this.props.hideDelay||0}
                    offset = {{y: 2}}
                    initOverLayerWidth={true}
                    renderContent={this.renderPopView.bind(this)}
                >
                    <div {...style} className={`xz-select xz-select-size-${Theme.getConfig('size',this.props)} ${this.props.className||''}`}>
                        <span className='placeholder'>{this.props.placeholder}</span>
                    </div>
                </PopView>)
        ;
    }
}