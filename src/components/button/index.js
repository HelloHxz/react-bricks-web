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
    onMouseOver(e){
        if(this.props.onMouseOver){
            this.props.onMouseOver(e,{
                instance:this
            });
        }
    }
    onMouseLeave(e){
        if(this.props.onMouseLeave){
            this.props.onMouseLeave(e,{
                instance:this
            });
        }
    }
    getBoundingClientRect = ()=>{
        return this.root.getBoundingClientRect();
    }
    render(){
        return (<button onMouseLeave={this.onMouseLeave.bind(this)} onMouseOver={this.onMouseOver.bind(this)} ref={(root)=>{this.root = root;}} className={`xz-btn xz-btn-size-${Theme.getConfig('size',this.props)} xz-btn-type-${Theme.getConfig('btn-type',this.props)}`} onClick={this.onClick.bind(this)}>{this.props.children}</button>)
    }
}