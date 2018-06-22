
import React from 'react';
import TableRow from './TableRow';
import TableCell from './TableCell';
import XZ from '../xz';

class TableBody extends React.Component{
    onMouseLeave = (e) => {
        this.props.root.onBodyMouseLeave(e);
    }
    render(){
        const dataSource = this.props.dataSource || [];
        const rows = [];
        const p = {};
        for(let i = 0,j=dataSource.length;i<j;i+=1){
            const rowdata = dataSource[i];
            let rowKey = '';
            if(!this.props.rowKey){
                if(!rowdata.__hxzdatarowkey__){
                    rowdata.__hxzdatarowkey__ = 'tablerow_'+XZ._getSystemUniqueNum();
                }
                rowKey = rowdata.__hxzdatarowkey__;
            }else{
                const typeofRowKey = typeof(this.props.rowKey);
                if(typeofRowKey==='function'){
                    rowKey = this.props.rowKey(rowdata,i);
                }else if(typeofRowKey==='string'){
                    rowKey = rowdata[this.props.rowKey];
                }
            }
           
            const cells = [];
            for(let n = 0,m=this.props.root.rootCellArr.length;n<m;n+=1){
                const cellConfig = this.props.root.rootCellArr[n];
                if(this.props.fixedLeftCount){
                    if(cellConfig.__groupIndex>=this.props.fixedLeftCount){
                        break;
                    }
                }
                if(this.props.fixedRightCount){
                    if(cellConfig.__groupIndex<this.props.table.props.columns.length-this.props.fixedRightCount){
                        continue;
                    }
                }
                cells.push(<TableCell key={cellConfig.key} {...this.props} cellConfig={cellConfig} data={rowdata}/>);
            }
            // todo props.render prerowdata nextrowdata
            rows.push(<TableRow {...this.props} rowKey={rowKey} key={rowKey}>
             {cells}
            </TableRow>);
        }
        p.onMouseLeave = this.onMouseLeave.bind(this);
        return (<tbody {...p}>
                {rows}
            </tbody>);
    }
}

export default TableBody;