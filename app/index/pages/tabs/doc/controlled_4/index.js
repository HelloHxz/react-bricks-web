import React from 'react';
import { Tabs } from 'bricks-web';
import './index.less';

export default class Example extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectedKey:'home'
        }
    }
    tabChange = (record)=>{
        this.setState({
            selectedKey:record.key
        });
    }
    renderItem = (key)=>{
        return <div>{key}</div>
    }
    render(){
        return <div>
            <Tabs 
                selectedKey={this.state.selectedKey}
                onChange={this.tabChange.bind(this)}
                style={{height:200}} 
                renderItem={this.renderItem.bind(this)} 
                data={[
                    {label:"首页",key:'home'},
                    {label:"邮箱",key:'email'},
                    {label:"动态",key:'info'},
                ]} />
        </div>;
    }
}