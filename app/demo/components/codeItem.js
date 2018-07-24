import React from 'react';
import MD from './md';

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
    }
    render(){
        const { CodeComponent,MDStr,JSCode,LessCode } = this.props.data;
        const MDArr = MDStr.split('-分割线-');
        return (<div className='doc-code-item'>
            <CodeComponent />
            <MD source={MDArr[1]} />
            <MD source={'```javascript\r\n'+JSCode+'\r\n```'} />
            <MD language='less' source={'```less\r\n'+LessCode+'\r\n```'} />
        </div>);
    }
}