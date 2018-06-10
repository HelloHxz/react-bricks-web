import React from 'react';
import Row from '../row';
import Theme from '../theme';
import './index.less';

export default class FormComponentWrapper extends React.Component{
    render(){
        // this.props.className this.props.vertical
        if(this.props.label){
            return (
                <Row className={`xz-formitem-size-${Theme.getConfig('size',this.props)}`}>
                    <Row.Col className='xz-formitem-label-wrapper' span={{md:5}}>
                        <span>{this.props.label}</span>
                    </Row.Col>
                    <Row.Col span={{md:19}}>
                        {this.props.children}
                    </Row.Col>
                </Row>
            )
        }
        return <React.Fragment>{this.props.children}</React.Fragment>;
    }
}