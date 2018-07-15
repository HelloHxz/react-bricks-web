import React from 'react';
import Row from '../row';
import Theme from '../theme';
import Common from '../../utils/common';
import './index.less';
import FormItemWrapper from '../formComponentWrapper';

export default class Input extends React.Component{

    constructor(props){
        super(props);
        this.state={
            focus:false
        }
    }
    onInput(e){
        if(this.props.onChange){
            this.props.onChange(e.target.value,{
                instance:this,
                type:'input',
                e,
            });
        }
    }
    onFocus(e){
        this.setState({
            focus:true
        });
    }
    onBlur(e){
        this.setState({
            focus:false
        });
    }
    render(){
        const p = { className:[`xz-input xz-input-size-${Theme.getConfig('size',this.props)}`]};
        if(this.props.style){
            p.style = this.props.style;
        }
        if(this.props.className){
            p.className.push(this.props.className);
        }
        if(this.state.focus){
            p.className.push("xz-input-focus");
        }
        p.className = p.className.join(' ');
        return <FormItemWrapper {...this.props}>
            <div {...p}>
                <input onFocus={this.onFocus.bind(this)} onBlur={this.onBlur.bind(this)} placeholder={this.props.placeholder} onInput={this.onInput.bind(this)} value={this.props.value} />
            </div>
         </FormItemWrapper>;
    }
}