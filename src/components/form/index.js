import React from 'react';
import {observer} from "mobx-react";

export default class Form extends React.Component{
    render(){
        return <div>{this.props.renderContent(this)}</div>
    }
}



@observer
class FormItem extends React.Component{
    onChange(e){
        const store = this.props.rowData||this.props.form.props.store;
        store[this.props.dataKey] = e.target.value;
    }
    render(){
        const store = this.props.rowData||this.props.form.props.store;
        const value = store[this.props.dataKey];
        const Com = this.props.com;
        return <Com {...this.props} onChange={this.onChange.bind(this)} value={value}/>;
    }
}

class FormRepeat extends React.Component{
    render(){
        const store = this.props.rowData||this.props.form.props.store;
        const dataKey = this.props.dataKey;
        const values = store[dataKey]||[];
        var children = [];
        for(var i=0,j=values.length;i<j;i++){
            const rowdata = values[i];
            children.push(this.props.renderRow(rowdata,i));
        }
        return children;
    }
}

Form.FormItem = FormItem;
Form.FormRepeat = FormRepeat;

