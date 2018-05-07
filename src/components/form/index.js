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
        if(store._1_formrow_1_){
            console.log("isinrow--->>");
        }
        const value = store[this.props.dataKey];
        const Com = this.props.com;
        return <Com {...this.props} onChange={this.onChange.bind(this)} value={value}/>;
    }
}

class FormRow extends React.Component{
    render(){
        const rowData = this.props.rowData;
        rowData._1_formrow_1_ = this;
        return this.props.renderRow(rowData,this.props.index)
    }
}
class FormRepeat extends React.Component{
    render(){
        const store = this.props.form.props.store;
        const dataKey = this.props.dataKey;
        const values = store[dataKey]||[];
        var children = [];
        for(var i=0,j=values.length;i<j;i++){
            const rowdata = values[i];
            children.push(<FormRow key={i} index={i} renderRow={this.props.renderRow} rowData={rowdata}/>);
        }
        return children;
    }
}

Form.FormItem = FormItem;
Form.FormRepeat = FormRepeat;

