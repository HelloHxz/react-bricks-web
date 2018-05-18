import React from 'react';
export default class Input extends React.Component{
    onChange(e){
        if(this.props.onChange){
            this.props.onChange(e,{
                instance:this,
                type:'input',
                value:e.target.value
            });
        }
    }
    render(){
        return (<input onChange={this.onChange.bind(this)} value={this.props.value} />)
    }
}