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
        const { CodeComponent,MDText,JSCode,LessCode } = this.props.data;
       
        return (<div className='doc-code-item'>
            <CodeComponent />
            <MD source={MDText} />
            <MD source={'```javascript\r\n'+JSCode+'\r\n```'} />
            <MD language='less' source={'```less\r\n'+LessCode+'\r\n```'} />
        </div>);
    }
}