import React from 'react';
import PopView from '../popview';
import Theme from '../theme';
import './index.less';


class SelectItem extends React.Component {
    onClick(){
        this.props.select.root.clearTimeout();
        this.props.select.root.focus();
        this.props.select.setState({
            value:this.props.data.label
        });
        this.props.select.root.hide();
    }
    render(){
        const {data} = this.props;
        return (<div onClick={this.onClick.bind(this)} className='xz-select-item xz-select-item-size-default'>
         {data.label}
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
        let children = [];
        if(!this.props.data || this.props.data.length === 0){
            children = <React.Fragment>
                {this.props.nodata?this.props.nodata:(<div className='xz-select-nodata'>无数据</div>) }
            </React.Fragment>;
        }else {
            for(let i = 0,j=this.props.data.length;i<j;i+=1){
                const itemData = this.props.data[i];
                if(!itemData.children){
                    children.push(<SelectItem select={this.props.select} key={itemData.value} data={itemData}/>);
                }
            }
        }
        return (
            <div className={className} style={dropDownStyle}>
                {children}
            </div>
        );
    }
}

// tabindex 才能是div获取onKeyDown事件
export default class Select extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:null
        };
    }
    renderPopView(){
        return <OverLayer select={this} {...this.props}/>;
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
                    showDelay={this.props.showDelay||50}
                    hideDelay={this.props.hideDelay||50}
                    offset = {{y: 2}}
                    initOverLayerWidth={true}
                    renderContent={this.renderPopView.bind(this)}
                >
                    <div {...style} className={`xz-select xz-select-size-${Theme.getConfig('size',this.props)} ${this.props.className||''}`}>
                        {this.state.value?<span className='xz-select-value'>{this.state.value}</span>:
                            (<span className='placeholder'>{this.props.placeholder}</span>)}
                    </div>
                </PopView>)
        ;
    }
}