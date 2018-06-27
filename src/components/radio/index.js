//https://www.html5tricks.com/demo/jiaoben1503/index.html
import React from 'react';
import './index.less'

export default class Radio extends React.Component {
    // true false indeterminate
    constructor(props){
        super(props);
        this.state = {
            value:this.prepareValue(props.value)
        };
    }

    prepareValue = (val)=>{
        if(!val){
            return false;
        }else if(val === true){
            return true;
        }
        return false;
    }
    render(){
        return <label className={`xz-radio xz-radio-${this.state.value.toString()}`}>
            <span className='xz-radio-inner'></span>
            <span className='xz-radio-label xz-radio-label-left'>radio</span>
            </label>
    }

}