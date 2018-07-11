import React from 'react';
import Row from '../row';
import Theme from '../theme';
import './index.less';
/*
    gridLayout:{
        label:{md:12,ms:12},
        input:{md:12},
        gutter:12|{md:12}
    }

    tableLayout:{
        label:120,
    }

    labelStyle:{},
    inputStyle:{},
    lableClassName
    inputClassName

*/
export default class FormComponentWrapper extends React.Component{
    render(){
        // this.props.className this.props.vertical
        if(this.props.label){
            if(!this.props.gridLayout&&!this.props.tableLayout){
                return <div className={`xz-form-item xz-form-item-vertical xz-formitem-size-${Theme.getConfig('size',this.props)}`}>
                        <div className='xz-formitem-label-wrapper'>
                            <span>{this.props.label}</span>
                        </div>
                        <div>
                            {this.props.children}
                        </div>
                    </div>
            }
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
        return this.props.children;
    }
}