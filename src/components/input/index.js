import React from 'react';
import Row from '../row';
import Theme from '../theme';
import Common from '../../utils/common';
import './index.less';
import FormItemWrapper from '../formComponentWrapper';

export default class Input extends React.Component{
    onInput(e){
        if(this.props.onChange){
            this.props.onChange(e.target.value,{
                instance:this,
                type:'input',
                e,
            });
        }
    }
    render(){
        const p = {};
        if(this.props.style){
            p.style = this.props.style;
        }
        return <FormItemWrapper {...this.props}>
            <div {...p} className={`xz-input xz-input-size-${Theme.getConfig('size',this.props)}`}>
                <input placeholder={this.props.placeholder} onInput={this.onInput.bind(this)} value={this.props.value} />
            </div>
         </FormItemWrapper>;
    }
}