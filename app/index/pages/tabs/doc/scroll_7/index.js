import React from 'react';
import { Tabs } from 'bricks-web';
import './index.less';

export default class Example extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[ {label:"首页",key:'home',allowClose:true},
            {label:"邮箱",key:'email',allowClose:true},
            {label:"动态",key:'info',allowClose:true},
            {label:"收件箱",key:'Inbox',allowClose:true},
            {label:"其他",key:'other',allowClose:true},
            {label:"消息",key:'message',allowClose:true},
            {label:"消息1",key:'message1',allowClose:true},
            {label:"消息2",key:'message2',allowClose:true},]
        }
    }
    renderItem = (key)=>{
        return <div>{key}</div>
    }
    render(){
        return <div>
            <Tabs style={{width:320}} 
                renderItem={this.renderItem.bind(this)} 
                defaultSelectedKey='home'
                data={this.state.data} 
            />
            <br />
            <Tabs 
                tabPosition='left'
                style={{height:200}} 
                renderItem={this.renderItem.bind(this)} 
                defaultSelectedKey='home'
                data={this.state.data} 
            />
        </div>;
    }
}