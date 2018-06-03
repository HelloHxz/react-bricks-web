import React from 'react';
import Theme from '../theme';
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
        return (<button className={`xz-btn xz-btn-size-${Theme.getConfig('size',this.props)} xz-btn-type-${Theme.getConfig('btn-type',this.props)}`} onClick={this.onClick.bind(this)}>{this.props.children}</button>)
    }
}