import React from 'react';
import Theme from '../theme';
import XZ from '../xz';
import './index.less';

export default class Tabs extends React.Component{
    constructor(props){
        super(props);
       
        this.state = {
            selectedKey:this.props.selectedKey || this.props.defaultSelectedKey
        };
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.selectedKey!==this.state.selectedKey){
            this.setState({
                selectedKey:nextProps.selectedKey
            });
        }
    }
    itemClick(data,tabItem){
        if(this.props.onChange){
            this.props.onChange(data,{
                tabsInstance:this,
                tabItemInstance:tabItem
            });
        }
    }
    render(){
        const data = this.props.data||[];
        const selectedItemClassName = this.props.selectedItemClassName || 'xz-tabs-item-selected';
        const tabs = [];
        for(let i=0,j=data.length;i<j;i+=1){
            const itemdata = data[i];
            const p = {};
            if(!itemdata.__xztabsitemkey__){
                itemdata.__xztabsitemkey__ = 'xzitem_'+XZ._getSystemUniqueNum();
            }
            if(itemdata.key === this.state.selectedKey){
                p.className = selectedItemClassName;
            }
            tabs.push(<TabsItem {...p} key={itemdata.__xztabsitemkey__} {...this.props} tabs={this} data={itemdata}/>);
        }
        return (<div className={`xz-tabs xz-tabs-${Theme.getConfig('size',this.props)} xz-tabs-hor`}>
            {tabs}</div>)
    }
}

class TabsItem extends React.Component{
    itemClick(data){
        this.props.tabs.itemClick(data,this);
    }
    render(){
        const { data } = this.props;
        const className = ['xz-tabs-item'];
        if(this.props.className){
            className.push(this.props.className);
        }
        return (<div onClick={this.itemClick.bind(this,data)} className={className.join(' ')}>{data.label||''}</div>)
    }
}

Tabs.Item = TabsItem;
