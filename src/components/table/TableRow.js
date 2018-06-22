import React from 'react';

class TableRow extends React.Component{
    onMouseOver(e){
        this.props.root.onRowMouseOver(e);
    }
    onMouseLeave(e){
        this.props.root.onRowMouseLeave(e);
    }
    render(){
        const p = {};
        p.onMouseOver = this.onMouseOver.bind(this);
        if(this.props.hoverRowKey === this.props.rowKey){
            p.className = 'xz-table-row-hover';
        }
        // p.onMouseLeave = this.onMouseLeave.bind(this);
        return (
            <tr {...p}
                data-rowkey={this.props.rowKey}>
                {this.props.children}
            </tr>
        );
    }
}

export default TableRow;