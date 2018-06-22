import React from 'react';
import StyleManager from './StyleManager';

class TableHeaderCell extends React.Component{
    render(){
        const p = {};
        const {cellConfig} = this.props;
        if(cellConfig.__rowspan && cellConfig.__rowspan!==1){
            p.rowSpan = cellConfig.__rowspan;
        }
        if(cellConfig.__colspan && cellConfig.__colspan!==1){
            p.colSpan = cellConfig.__colspan;
        }
        let innnerClassName = {};

        if(cellConfig.__isRootCell){
            innnerClassName.className =`xz-table-cell-inner ${StyleManager._getCellClassName(this.props.root.tableid,cellConfig.key)}` ;
        }else{
            innnerClassName.className ='xz-table-cell-inner';
        }
        return <th {...p}><div {...innnerClassName}>{cellConfig.title}</div></th>;
    }
}

export default TableHeaderCell;