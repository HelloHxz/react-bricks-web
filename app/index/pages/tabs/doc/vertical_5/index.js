import React from 'react';
import { Tabs } from 'bricks-web';
import './index.less';

export default class Example extends React.Component{
    renderItem = (key)=>{
        return <div>{key}</div>
    }
    render(){
        return <div>
        <Tabs 
            defaultSelectedKey='home'
            style={{height:200}}
            tabPosition='left' 
            renderItem={this.renderItem.bind(this)} 
            data={[
                {label:"首页",key:'home'},
                {label:"邮箱",key:'email'},
                {label:"动态",key:'info'},
            ]} />
        <br/>
        <br/>
        <Tabs 
            defaultSelectedKey='home'
            style={{height:200}}
            tabPosition='right' 
            renderItem={this.renderItem.bind(this)} 
            data={[
                {label:"首页",key:'home'},
                {label:"邮箱",key:'email'},
                {label:"动态",key:'info'},
            ]} />
        </div>;
    }
}