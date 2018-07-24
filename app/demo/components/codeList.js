import React from 'react';
import { Row } from 'react-bricks-web';
import CodeItem from './codeItem';

export default class CodeList extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        const firstColumnChildren = [];
        const secondColumnChildren=[];
        for(let i = 0,j=this.props.data.length;i<j;i++){
           const child  = <CodeItem  key={i} data={this.props.data[i]}/>;
           if(i%2===0){
              firstColumnChildren.push(child);
           }else{
              secondColumnChildren.push(child);
           }
        }
        return (
            <Row gutter={12}>
                <Row.Col span={{sm:24,md:12}}>
                 {firstColumnChildren}
                </Row.Col>
                <Row.Col span={{sm:24,md:12}}>
                 {secondColumnChildren}
                </Row.Col>
            </Row>);
    }
}