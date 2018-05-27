import React from 'react';

export default class Button extends React.Component{

    onClick(e){
        if(this.props.onClick){
            this.props.onClick(e,{
                instance:this
            });
        }
    }

    render(){
        return (<button onClick={this.onClick.bind(this)}>{this.props.children}</button>)
    }
}