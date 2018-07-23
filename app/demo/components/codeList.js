import React from 'react';
import { Row } from 'react-bricks-web';
import CodeItem from './codeItem';

/*
    {
        MD:
        CodeComponent:
        JSCode:'',
        LessCode:''
    }
*/
export default class CodeList extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        const child  = [];
        for(let i = 0,j=this.props.data.length;i<j;i++){
            child.push(<Row.Col key={i} span={{sm:24,md:12}}>
                <CodeItem data={this.props.data[i]}/>
            </Row.Col>);
        }
        return (<Row gutter={16}>{child}</Row>);
    }
}