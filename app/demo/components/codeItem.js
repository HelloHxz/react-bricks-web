import React from 'react';
import MD from './md';
import { Tabs } from 'react-bricks-web';

/*
    {
        MD:
        CodeComponent:
        JSCode:'',
        LessCode:''
    }
*/
export default class CodeItem extends React.Component{
    constructor(props){
        super(props);
        this.state={
            codeOpen:false
        }
    }
    toggle(){
        this.setState({
            codeOpen:!this.state.codeOpen
        });
    }
    render(){
        const { CodeComponent,MDText,JSCode,LessCode,MDConfig } = this.props.data;
        const tabData = [
            {key:'js',label:'JS (index.js)'},
        ];
        if(LessCode.trim().length>0){
            tabData.push({key:'less',label:'Less (index.less)'});
        }
        return (<div className='doc-code-item'>
            <CodeComponent />
            <div className='doc-code-title'>
                <span className='title'>{MDConfig.title}</span>
                <span onClick={this.toggle.bind(this)} className='toggle' style={{float:'right'}}>{this.state.codeOpen?'收起代码':'展开代码'}</span>
                <div className='line'></div>
            </div>
            <MD source={MDText} />
            {this.state.codeOpen?(<Tabs 
                data={tabData}
                defaultSelectedKey='js'
                renderItem={(key)=>{
                    if(key==='js'){
                        return <MD source={'```javascript\r\n'+JSCode+'\r\n```'} />;
                    }else if(key==='less'){
                        return <MD language='less' source={'```less\r\n'+LessCode+'\r\n```'} />;
                    }
                }}
            />):null}
        </div>);
    }
}