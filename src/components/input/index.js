import React from 'react';
import Row from '../row';
import Col from '../col';
import Theme from '../theme';
import Common from '../../utils/common';
import './index.less';
import FormItemWrapper from '../formComponentWrapper';

export default class Input extends React.Component{
    onChange(e){
        if(this.props.onChange){
            this.props.onChange(e,{
                instance:this,
                type:'input',
                value:e.target.value
            });
        }
    }
    render(){
        return <FormItemWrapper {...this.props}>
            <div className={`xz-input xz-input-size-${Theme.getConfig('size',this.props)}`}>
            <input placeholder={this.props.placeholder} onChange={this.onChange.bind(this)} value={this.props.value} />
         </div></FormItemWrapper>;
    }
}