import React from 'react';
import Theme from '../theme';
import './index.less';

export default class Button extends React.Component{
    onClick(e){
        this.props.onClick(e,{
            instance:this
        });
    }
    onMouseOver(e){
        this.props.onMouseOver(e,{
            instance:this
        });
    }
    onMouseLeave(e){
        this.props.onMouseLeave(e,{
            instance:this
        });
    }
    getBoundingClientRect = ()=>{
        return this.root.getBoundingClientRect();
    }
    render(){
        var mouseEvent = {};
        if(this.props.onMouseLeave){
            mouseEvent.onMouseLeave = this.onMouseLeave.bind(this);
        }
        if(this.props.onMouseOver){
            mouseEvent.onMouseOver = this.onMouseOver.bind(this);
        }
        if(this.props.onClick){
            mouseEvent.onClick = this.onClick.bind(this);
        }
        return (<button {...mouseEvent} ref={(root)=>{this.root = root;}} className={`xz-btn xz-btn-size-${Theme.getConfig('size',this.props)} xz-btn-type-${Theme.getConfig('btn-type',this.props)}`}>{this.props.children}</button>)
    }
}