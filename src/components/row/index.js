import React from 'react';
import Col from '../col';
import global from '../../utils/global';
import './t.less';
export default class Row extends React.Component{
    componentDidMount = ()=>{
        this.eventid = global.addEvent('resize',()=>{
            console.log(this.eventid);
        });
    }

    componentWillUnmount = ()=>{
        global.removeEvent('resize',this.eventid);
    }

    render(){
        const className = ['xz-row'];
        if(this.props.className){
            className.push(this.props.className);
        }
        const child = [];
        for(let i = 0,j = this.props.children.length;i<j;i++){
            if(this.props.children[i].type === Col){
                child.push(this.props.children[i]);
            }
        }
        return (<div className={className.join(' ')}>{child}</div>)
    }
}