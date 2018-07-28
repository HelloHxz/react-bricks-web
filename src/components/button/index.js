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
        var p = {};
        var className = [`xz-btn xz-btn-size-${Theme.getConfig('size',this.props)} xz-btn-type-${Theme.getConfig('btn-type',this.props)}`];
        if(!this.props.disabled){
            if(this.props.onMouseLeave){
                p.onMouseLeave = this.onMouseLeave.bind(this);
            }
            if(this.props.onMouseOver){
                p.onMouseOver = this.onMouseOver.bind(this);
            }
            if(this.props.onClick){
                p.onClick = this.onClick.bind(this);
            }
        }else{
            className.push('xz-btn-disabled');
        }
     
        if(this.props.style){
            p.style = this.props.style;
        }
        return (<button {...p} ref={(root)=>{this.root = root;}} className={className.join(' ')}>
                {this.props.children}
            </button>)
    }
}