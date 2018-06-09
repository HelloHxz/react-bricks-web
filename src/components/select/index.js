import React from 'react';
import PopView from '../popview';
import Theme from '../theme';
import './index.less';


class SelectItem extends React.Component {
    onClick(){
        this.props.root.clearTimeout();
        this.props.root.focus();
        this.props.root.hide();
    }
    render(){
        return (<div onClick={this.onClick.bind(this)} className='xz-select-item xz-select-item-size-default'>
         2
       </div>);
    }
}

class OverLayer extends React.Component{
    render(){
        return (
            <div className='xz-select-dropdown' style={{ width:'100%',maxHeight:250 }}>
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
        return <OverLayer root={this.root}/>;
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
                    {...this.props}
                    mode='click' 
                    placement='bottomright'
                    positionMode={this.props.positionMode||'absolute'}
                    ref={(instance)=>{this.root = instance;}}
                    hideMode={this.props.hideMode||'blur'}
                    onShow = {this.onShow.bind(this)}
                    onHide = {this.onHide.bind(this)}
                    offset = {{y: 2}}
                    initOverLayerWidth={true}
                    renderContent={this.renderPopView.bind(this)}
                >
                    <div className={`xz-select xz-select-size-${Theme.getConfig('size',this.props)}`}>
                        <span className='placeholder'>{this.props.placeholder}</span>
                    </div>
                </PopView>)
        ;
    }
}