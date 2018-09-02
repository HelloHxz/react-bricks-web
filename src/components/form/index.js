import React from 'react';
import {observer} from "mobx-react";
import {extendObservable,observable} from 'mobx';

class Form extends React.Component{

    constructor(props){
        super(props);
        this.store = observable({});
    }
    componentDidMount(){
        this.originStoreData = {};
        setTimeout(()=>{
            this.originStoreData = this.cloneData(this.store);
        },200)
    }
    cloneData(data){
        return JSON.parse(JSON.stringify(data));
    }
    reset(){
        for(var key in this.originStoreData){
            this.store[key] = this.originStoreData[key];
        }
    }

    getFieldValue(key){

    }

    getFieldsValue(){
        return this.store;
    }

    validate(){

    }
    render(){
        const p = setProperty({form:this},this.props);
        return <div>{this.props.renderContent(p)}</div>
    }
}

function setProperty(p,props){
    if(props.tableLayout){
        p.tableLayout = props.tableLayout;
    }
    if(props.gridLayout){
        p.gridLayout = props.gridLayout;
    }
    if(props.size){
        p.size = props.size;
    }
    return p;
}


function extendObservableDataKey(props,defaultValue){
    const store = props.rowData||props.form.store;
    if(!store.hasOwnProperty(props.dataKey)){
        const kv = {};
        kv[props.dataKey] = defaultValue;
        extendObservable(store,kv);
    }
}

@observer
class FormItem extends React.Component{
    constructor(props){
        super(props);
        extendObservableDataKey(props,props.defaultValue);
    }
    validate(){
    }
    onChange(value,params){
        const store = this.props.rowData||this.props.form.store;
        store[this.props.dataKey] = value;
    }
    render(){
        console.log("render item~ "+this.props.dataKey);
        const store = this.props.rowData||this.props.form.store;
        const value = store[this.props.dataKey];
        const Com = this.props.com;
        return <Com {...this.props} onChange={this.onChange.bind(this)} value={value}/>;
    }
}

@observer
class FormRow extends React.Component{
    validate(){
        
    }
    render(){
        const rowData = this.props.rowData;
        const p = setProperty({rowData,index:this.props.index,rowInstance:this,form:this.props.form},this.props);
        return this.props.renderRow(p)
    }
}

@observer
class FormRepeat extends React.Component{
    constructor(props){
        super(props);
        let defaultValue = [];
        if(props.defaultValue&&props.defaultValue instanceof Array){
            defaultValue = props.defaultValue;
        }
        extendObservableDataKey(props,defaultValue);
    }
    validate(){
    }
    render(){
        const store = this.props.rowData||this.props.form.store;
        const dataKey = this.props.dataKey;
        const values = store[dataKey]||[];
        console.log("render repeat~!!");
        var children = [];
        for(var i=0,j=values.length;i<j;i++){
            const rowdata = values[i];
            children.push(<FormRow {...this.props} key={i} index={i} renderRow={this.props.renderRow} rowData={rowdata}/>);
        }
        return children;
    }
}

Form.FormItem = FormItem;
Form.FormRepeat = FormRepeat;

export default Form;


