import React from 'react';

export default class Col extends React.Component{
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