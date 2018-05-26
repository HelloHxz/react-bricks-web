import React from 'react';
import Col from '../col';
import './t.less';
export default class Row extends React.Component{
    _ssd = "xxx";

    render(){
        const className = ['xz-row'];
        const child = [];
        for(let i = 0,j = this.props.children.length;i<j;i++){
            if(this.props.children[i].type === Col){
                child.push(this.props.children[i]);
            }
        }
        return (<div className={className.join(' ')}>{child}</div>)
    }
}