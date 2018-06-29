import React from 'react';
import './index.less'

export default class CheckBox extends React.Component {
    // true false indeterminate
    constructor(props){
        super(props);
        this.state = {
            // value:this.prepareValue(props.value)
        };
    }

    prepareValue = (val)=>{
        if(!val){
            return false;
        }else if(val ==='indeterminate'){
            return 'indeterminate';
        }else if(val === true||val === 1){
            return true;
        }
        return false;
    }
    // componentWillReceiveProps(nextProps){
    //     const newValue = this.prepareValue(nextProps.value);
    //     if(newValue!==this.state.value){
    //         this.setState({value:newValue});
    //     }
    // }
    onClick(e){
        if(this.props.onChange){
            let newValue = false;
            if(this.props.value!==true){
                newValue = true;
            }
            this.props.onChange(newValue,{
                oldValue:this.props.value,
                instance:this
            });
        }
    }
    render(){
        const p = {
            className:[`xz-checkbox xz-checkbox-${this.prepareValue(this.props.value).toString()}`]
        };
        if(this.props.disabled){
            p.className.push("xz-checkbox-disabled");
        }else{
            p.onClick=this.onClick.bind(this);
        }
        p.className = p.className.join(' ');
        return <label {...p}>
            <span className='xz-checkbox-inner'></span>
            {
                this.props.label?(<span className='xz-checkbox-label xz-checkbox-label-left'>{this.props.label}</span>):null
            }
            </label>
    }

}