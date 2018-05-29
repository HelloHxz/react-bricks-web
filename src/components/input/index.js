import React from 'react';
import Row from '../row';
import Col from '../col';
import './index.less';

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
        const C = <div className='xz-input xz-input-default'><input onChange={this.onChange.bind(this)} value={this.props.value} /></div>;
        if(this.props.label){
            return (
                <Row>
                    <Col className='xz-input-label-wrapper xz-input-label-wrapper-default' span={{md:5}}>
                        <span>{this.props.label}</span>
                    </Col>
                    <Col span={{md:19}}>
                        {C}
                        <span className='xz-input-mes'>填写错误了哟</span>
                    </Col>
                </Row>
            )
        }
        return <div className='xz-input-out'>{C}</div>;
    }
}