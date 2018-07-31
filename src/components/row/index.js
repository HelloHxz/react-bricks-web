import React from 'react';
import XZ from '../xz';
import './index.less';

const screenMap = {
    xs: 575,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1600,
  };
const sizeArr = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];


class Col extends React.Component{
    render(){
        const propsArr = ['span','pull','push','offset'];
        const { className, children, prefixCls = 'xz-col' } = this.props;
        const _className = ['xz-col'];
       
        for(let n = 0,m=propsArr.length;n<m;n+=1){
            const p = propsArr[n];
            let pValueConfig = this.props[p] || {};
            if(typeof pValueConfig !== 'object'){
                if(!isNaN(pValueConfig)){
                    if(p==='span'){
                        _className.push(`${prefixCls}-${pValueConfig}`);
                    }else{
                        _className.push(`${prefixCls}-${p}-${pValueConfig}`);
                    }
                }
            }else{
                for(var size in pValueConfig){
                    let pValue = pValueConfig[size];
                    if(pValue||pValue===0){
                        if(p==='span'){
                            _className.push(`${prefixCls}-${size}-${pValue}`);
                        }else{
                            _className.push(`${prefixCls}-${size}-${p}-${pValue}`);
                        }
                    }
                }
            }
        }
        if(className){
            _className.push(className);
        }
        if(this.props.className){
            _className.push(this.props.className);
        }
        return (<div style={this.props.style} className={_className.join(' ')}>{children}</div>)
    }
}

export default class Row extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            screenSize:this.getScreenSize()
        };
    }

    getScreenSize(){
        const bodyWidth = document.body.offsetWidth;
        let size = 'xs';
        for(const key in screenMap){
            if(bodyWidth>=screenMap[key]){
                size = key;
            }
        }
        return size;
    }

    componentDidMount = ()=>{
        if(typeof this.props.gutter === 'object'){
            this.eventid =XZ.listenerResizeEvent(()=>{
                this.setState({
                    screenSize:this.getScreenSize()
                });
            });
        }
    }

    getGutter(){
        let re = 0;
        if(this.props.gutter){
            if(!isNaN(this.props.gutter)){
                re = parseInt(this.props.gutter);
            }else if(typeof this.props.gutter === 'object'){
                let preVal = 8;
                // 保证有默认值
                for(let i=0,j=sizeArr.length;i<j;i+=1){
                    const size = sizeArr[i];
                    if(!this.props.gutter[size]){
                        this.props.gutter[size] = preVal;
                    }else{
                        preVal = this.props.gutter[size];
                    }
                }
                const _gutter = this.props.gutter[this.state.screenSize];
                if(_gutter&&!isNaN(_gutter)){
                    re = parseInt(_gutter);
                }
            }
        }
        return re;
    }

    componentWillUnmount = ()=>{
        XZ.removeResizeListener(this.eventid);
    }

    render(){
        const className = ['xz-row'];
        if(this.props.className){
            className.push(this.props.className);
        }
        const child = [];
        const style = this.props.style||{};
        const gutter = this.getGutter();
        const rowStyle = (gutter) > 0 ? {
            marginLeft: (gutter) / -2,
            marginRight: (gutter) / -2,
            ...style,
          } : style;
        for(let i = 0,j = this.props.children.length;i<j;i++){
            const col = this.props.children[i];
            if(col.type === Col){
                child.push(React.cloneElement(col,
                    {
                        key:i,
                        style: {
                            paddingLeft: gutter / 2,
                            paddingRight: gutter / 2,
                            ...col.props.style,
                          },
                    }));
            }
        }
        return (<div style={rowStyle} className={className.join(' ')}>{child}</div>)
    }
}

Row.Col = Col;