import React from 'react';
import {observer} from "mobx-react";
import {extendObservable,observable} from 'mobx';

export default class Form extends React.Component{

    constructor(props){
        super(props);
        if(!props.store||!props.dataKey){
            this.store = observable({});
        }else{
            this.store = props.store[props.dataKey];
        }
    }

    getFiledValue(){
        
    }

    validate(){

    }
    render(){
        return <div>{this.props.renderContent({form:this})}</div>
    }
}



@observer
class FormItem extends React.Component{
    constructor(props){
        super(props);
        const store = props.rowData||props.form.store;
        if(!store.hasOwnProperty(props.dataKey)){
            const kv = {};
            kv[this.props.dataKey] = "";
            extendObservable(store,kv);
        }
    }
    validate(){
        
    }
    onChange(e){
        const store = this.props.rowData||this.props.form.store;
        store[this.props.dataKey] = e.target.value;
    }
    render(){
        const store = this.props.rowData||this.props.form.store;
        const value = store[this.props.dataKey];
        const Com = this.props.com;
        return <Com {...this.props} onChange={this.onChange.bind(this)} value={value}/>;
    }
}

class FormRow extends React.Component{
    validate(){
        
    }
    render(){
        const rowData = this.props.rowData;
        return this.props.renderRow({rowData,index:this.props.index,rowInstance:this,form:this.props.form})
    }
}

@observer
class FormRepeat extends React.Component{
    constructor(props){
        super(props);
        const store = props.rowData||props.form.store;
        if(!store.hasOwnProperty(props.dataKey)){
            const kv = {};
            kv[this.props.dataKey] = [];
            extendObservable(store,kv);
        }
    }
    validate(){
    }
    render(){
        const store = this.props.rowData||this.props.form.store;
        const dataKey = this.props.dataKey;
        const values = store[dataKey]||[];
        console.log(values);
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

