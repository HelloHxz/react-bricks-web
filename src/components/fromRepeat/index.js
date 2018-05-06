import React from 'react';

export default class FormRepeat extends React.Component{
    render(){
        const store = this.props.store;
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