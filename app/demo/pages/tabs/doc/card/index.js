import React from 'react';
import { Tabs } from 'react-bricks-web';
import './index.less';

export default class Example extends React.Component{
    renderItem = (key)=>{
        return <div>{key}</div>
    }
    render(){
        return <div>
            <Tabs 
                defaultSelectedKey='home'
                type='card'
                style={{height:200}} 
                tabPosition='top' 
                renderItem={this.renderItem.bind(this)} 
                data={[
                    {label:"首页",key:'home'},
                    {label:"邮箱",key:'email'},
                    {label:"动态",key:'info'},
                ]} />
        </div>;
    }
}