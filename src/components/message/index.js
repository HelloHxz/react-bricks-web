import React from 'react';
export default class Message extends React.Component{
    
    render(){
        return (<input onChange={this.onChange.bind(this)} value={this.props.value} />)
    }
}