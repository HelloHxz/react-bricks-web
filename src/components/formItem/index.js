import React from 'react';
import {observer} from "mobx-react";

@observer
class FormItem extends React.Component{
    onChange(e){
        this.props.store[this.props.dataKey] = e.target.value;
    }
    render(){

        const value = this.props.store[this.props.dataKey];
        const Com = this.props.com;
        return <Com {...this.props} onChange={this.onChange.bind(this)} value={value}/>;
    }
}
export default FormItem;