import React from 'react';

class TableHeaderRow extends React.Component{
    render(){
        return (
            <tr
                data-rowkey={this.props.rowKey}>
                {this.props.children}
            </tr>
        );
    }
}

export default TableHeaderRow;