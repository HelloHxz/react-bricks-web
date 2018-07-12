import React from 'react';
import Row from '../row';
import TableLayout from '../tablelayout';
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
        if(this.props.label){
            if(this.props.tableLayout){
                const tableLabelProps = {
                    ...{width:100},
                    ...(this.props.tableLayout.label||{})
                };
                const tableInputProps = this.props.tableLayout.input||{};
                return (
                    <TableLayout className={`xz-formitem-size-${Theme.getConfig('size',this.props)}`}>
                        <TableLayout.Cell {...tableLabelProps} className='xz-formitem-label-wrapper'>
                            <span>{this.props.label}</span>
                        </TableLayout.Cell>
                        <TableLayout.Cell {...tableInputProps}>
                            {this.props.children}
                        </TableLayout.Cell>
                    </TableLayout>
                )
            }
            if(this.props.gridLayout){
                const gridLabelProps = {
                    ...{span:{md:5}},
                    ...this.props.gridLayout.label||{}
                };
                const gridInputProps = {
                    ...{span:{md:19}},
                    ...this.props.gridLayout.input||{}
                };
                return (
                    <Row className={`xz-formitem-size-${Theme.getConfig('size',this.props)}`}>
                        <Row.Col className='xz-formitem-label-wrapper' {...gridLabelProps}>
                            <span>{this.props.label}</span>
                        </Row.Col>
                        <Row.Col {...gridInputProps}>
                            {this.props.children}
                        </Row.Col>
                    </Row>
                )
            }
            return (
                <div className={`xz-form-item xz-form-item-vertical xz-formitem-size-${Theme.getConfig('size',this.props)}`}>
                    <div className='xz-formitem-label-wrapper'>
                        <span>{this.props.label}</span>
                    </div>
                    <div>
                        {this.props.children}
                    </div>
                </div>)
            
        }
        return this.props.children;
    }
}