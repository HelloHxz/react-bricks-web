import React from 'react';
import Theme from '../theme';
import './index.less';

/* 
    colspan : 当前字段对应的根字段的个数
    rowspan ：先得到头部行数为rowCount,当前字段从上到下进行分配，可分配数为rowCount，
    如果该字段有子字段那么分配1，rowspan为1，可分配数减去1，再遍历下去分配。
    如果没有子字段 那么rowspan为可分配的所剩下的值。
*/

class TableHeader extends React.Component {
    constructor(props){
        super(props);
  
    }
    _createRows = (columns,rows) => {
        for(let i = 0,j=columns.length;i<j;i+=1){
            const colItem = columns[i];
            const _level = colItem.__level - 1;
            if(!rows[_level]){
                rows[_level] = [];
            }
            rows[_level].push(
                <TableHeaderCell key={`${colItem.key||''}_${colItem.title}`} cellConfig={colItem} />
            );
            if(colItem.children){
                this._createRows(colItem.children,rows);
            }
        }
    }
    render(){
        const headerRows = [];
        this._createRows(this.props.columns,headerRows);
        const rows = [];
        for(var i=0,j=headerRows.length;i<j;i+=1){
            rows.push(<TableRow key={i}>
                    {headerRows[i]}
                </TableRow>);
        }
        return (<thead>
            {rows}
        </thead>);
    }
}

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
        if(cellConfig.__isRootCell){
            console.log(cellConfig);
        }
        return <th {...p}><div style={{width:100}}>{cellConfig.title}</div></th>;
    }
}

class TableBody extends React.Component{
    render(){
        return (<tbody>
                <TableRow />
                <TableRow />
                <TableRow />
                <TableRow />
            </tbody>);
    }
}

class TableRow extends React.Component{
    render(){
        return (<tr>
           {this.props.children}
        </tr>);
    }
}


class TableCell extends React.Component{
    render(){
        const p = {};
        return <td {...p}>xxx</td>;
    }
}

class TableUtil {
    // 获取表头层次深度也就是表头行数 
    static _getLevel = (columns,_level) => {
        let curLevel = 1;
        if(_level){
            curLevel = _level;
        }
        const levelRe = [];
        for(let i = 0,j=columns.length;i<j;i+=1){
            const colItem = columns[i];
            colItem.__level = curLevel;
            colItem.__colspan = TableUtil._getRootCellCountOfColumn(colItem);
            if(colItem.children){
                levelRe[i] = TableUtil._getLevel(colItem.children,curLevel+1);
            }else{
                levelRe[i] = curLevel;
            }
        }
        return TableUtil._maxOfArr(levelRe);
    }

    static _setRowSpan = (columns,level) => {
        for(let i = 0,j=columns.length;i<j;i+=1){
            const colItem = columns[i];
            if(colItem.children){
                colItem.__rowspan = 1;
                TableUtil._setRowSpan(colItem.children,level-1);
            }else{
                colItem.__rowspan = level;
            }
        }
    }
    
    static _maxOfArr = (arr) => {
        let re = 0;
        for(let i = 0,j=arr.length;i<j;i+=1){
            if(re<arr[i]){
                re = arr[i];
            }
        }
        return re;
    }
    // 获取到根Cell的个数
    static _getRootCellCountOfColumn = (column)=>{
        let re = 0;
        const children = column.children;
        if(!children){
            return 1;
        }
        for(let i = 0,j=children.length;i<j;i+=1){
            const colItem = children[i];
            if(colItem.children){
                re += TableUtil._getRootCellCountOfColumn(colItem);
            }else{
                re += 1;
            }
        }
        return re;
    }

    static _getRootCellArr = (columns,outArr) => {
        for(let i=0,j=columns.length;i<j;i+=1){
            const colItem = columns[i];
            if(colItem.children){
                TableUtil._getRootCellArr(colItem.children,outArr);
            }else{
                colItem.__isRootCell = true;
                outArr.push(colItem);
            }
        }
    }
}

export default class Table extends React.Component{
    constructor(props){
        super(props);
        const rootCellArr = [];
        console.log(rootCellArr);
        const level = TableUtil._getLevel(props.columns);
        TableUtil._setRowSpan(props.columns,level);
        TableUtil._getRootCellArr(props.columns,rootCellArr);
        console.log(props.columns)
    }
    
   
    render(){
        const className = ['xz-table'];
        if(this.props.className){
            className.push(this.props.className);
        }
        return (<div>
            <table className={className.join(" ")}>
                <TableHeader {...this.props}/>
                <TableBody/>
            </table>
            <style>{'.c{color:red}'}</style>
        </div>)
    }
}