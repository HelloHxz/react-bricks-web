import React from 'react';
import Row from '../row';
import Col from '../col';
import Theme from '../theme';
import './index.less';

export default class FormComponentWrapper extends React.Component{
    render(){
        // this.props.className this.props.vertical
        if(this.props.label){
            return (
                <Row>
                    <Col className='xz-input-label-wrapper' span={{md:5}}>
                        <span>{this.props.label}</span>
                    </Col>
                    <Col span={{md:19}}>
                        {this.props.children}
                    </Col>
                </Row>
            )
        }
        return <React.Fragment>{this.props.children}</React.Fragment>;
    }
}