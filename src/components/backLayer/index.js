import React from 'react';
import './index.less';

export default class BackLayer extends React.Component{
    constructor(props){
        super(props);
    }
    onClick(){
        this.props.onClick();
    }
    render(){
        const status = this.props.show?'show':'hide';
        if(status==='hide'&&this.preStatus!=='show'){
            return null;
        }
        const className=['xz-bk-layer'];
        this.preStatus = status;
        const positionMode = this.props.positionMode || 'absolute';
        className.push('xz-bk-layer-'+positionMode);
        className.push('xz-bk-layer-'+status);
        const p = {};
        if(this.props.style){
            p.style = this.props.style;
        }
        if(this.props.className){
            className.push(this.props.className);
        }
        if(this.props.onClick){
            p.onClick = this.onClick.bind(this);
        }
        return (<div {...p} className={className.join(' ')}></div>)
    }
}