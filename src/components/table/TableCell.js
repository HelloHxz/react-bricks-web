import React from 'react';
import StyleManager from './StyleManager';

class TableCell extends React.Component{
    render(){
        const {cellConfig,table} = this.props;
        var innerp = {
            className:`xz-table-cell-inner ${StyleManager._getCellClassName(table.tableid,cellConfig.key)}`
        };
        return <td><div {...innerp}>asdasdas</div></td>;
    }
}

export default TableCell;