import React from 'react';
import './index.less';

export default class Button extends React.Component{

    onClick(e){
        if(this.props.onClick){
            this.props.onClick(e,{
                instance:this
            });
        }
    }

    render(){
        return (<button className='xz-btn xz-btn-default' onClick={this.onClick.bind(this)}>{this.props.children}</button>)
    }
}