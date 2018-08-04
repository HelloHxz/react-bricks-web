import React from 'react';
import { Tabs,Button } from 'bricks-web';
import './index.less';

export default class Example extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[
                {label:"首页",key:'home'},
                {label:"邮箱",key:'email'},
                {label:"动态",key:'info'},
            ],
            selectedKey:'home'
        }
    }
    renderItem = (key)=>{
        return <div>{key}</div>
    }
    add = ()=>{
        var key = new Date().valueOf().toString();
        this.state.data.push({key:key,label:"new"});
        this.setState({
            data:this.state.data,
            selectedKey:key
        })
    }

    modify = () => {
        this.state.data[0].label="修改了";
        this.setState({
            data:this.state.data,
        })
    }
    tabChange(record){
            this.setState({
                selectedKey:record.key
            });
    }
    
    render(){
        return <div>
             <div>
                <Button onClick={this.add.bind(this)}>Add</Button>
                <Button onClick={this.modify.bind(this)}>Modify</Button>
            </div>
            <Tabs 
                defaultSelectedKey={this.state.selectedKey}
                onChange={this.tabChange.bind(this)}
                style={{height:200}} 
                renderItem={this.renderItem.bind(this)} 
                data={this.state.data} />
        </div>;
    }
}