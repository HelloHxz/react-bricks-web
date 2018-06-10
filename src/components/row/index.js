import React from 'react';
import global from '../../utils/global';
import './t.less';

class Col extends React.Component{
    render(){
        const sizeArr = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
        const propsArr = ['span','pull','push','offset'];
        const { className, children, prefixCls = 'xz-col' } = this.props;
        const _className = [];
        let preSpan = null;
        for(let i = 0,j = sizeArr.length; i < j; i += 1){
            const size = sizeArr[i];
            for(let n = 0,m=propsArr.length;n<m;n+=1){
                const p = propsArr[n];
                let pValueConfig = this.props[p] || {};
                if(typeof pValueConfig !== 'object'){
                    pValueConfig = {};
                }
                let pValue = pValueConfig[size];
                if(p==='span'&&!pValue&&pValue!==0){
                    pValue = preSpan || 24;
                }
                if(pValue||pValue===0){
                    preSpan = pValue;
                    if(p==='span'){
                        _className.push(`${prefixCls}-${size}-${pValue}`);
                    }else{
                        _className.push(`${prefixCls}-${size}-${p}-${pValue}`);
                    }
                }
            }
        }
        if(className){
            _className.push(className);
        }
        return (<div className={_className.join(' ')}>{children}</div>)
    }
}

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

Row.Col = Col;