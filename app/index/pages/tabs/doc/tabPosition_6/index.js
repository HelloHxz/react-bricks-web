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
                // 如果外层元素高度固定的话 也可以指定height:100% 来固定高度
                style={{height:200}}
                tabPosition='bottom' 
                renderItem={this.renderItem.bind(this)} 
                data={[
                    {label:"首页",key:'home'},
                    {label:"邮箱",key:'email'},
                    {label:"动态",key:'info'},
                ]} />
        </div>;
    }
}