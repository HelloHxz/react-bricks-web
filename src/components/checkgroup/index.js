import React from 'react';
import CheckBox from '../checkbox';
import './index.less'

export default class CheckGroup extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value:[]
        };
    }

   
    componentWillReceiveProps(nextProps){
        
    }
    onChange(itemdata,value,params){
        if(this.props.onChange){
            const newValue = [...(this.props.value||[])];
            const index = newValue.indexOf(itemdata.value);
            if(value){
                if(index<0){
                    newValue.push(itemdata.value)
                }
            }else{
                if(index>=0){
                    newValue.splice(index,1);
                }
            }
            this.props.onChange(newValue,{
                oldValue:this.props.value||[],
                instance:this
            });
        }
    }
    render(){
        const p = {
            className:[`xz-checkbox-list`]
        };
        p.className = p.className.join(' ');
        const data = this.props.data || [];
        const children = [];
        const values = this.props.value || [];
        for(let i = 0,j=data.length;i<j;i+=1){
            const itemdata = data[i];
            const value = values.indexOf(itemdata.value)>=0;
            children.push(<CheckBox onChange={this.onChange.bind(this,itemdata)} value={value} key={itemdata.value}>{itemdata.label}</CheckBox>);
        }
        return <div {...p}>
        {children}
            </div>
    }

}