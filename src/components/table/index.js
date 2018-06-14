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
    render(){
        return (<thead>
            <TableRow isHeader={true}>
            </TableRow>
        </thead>);
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
            <TableCell isHeader={this.props.isHeader}></TableCell>
            <TableCell isHeader={this.props.isHeader}></TableCell>
        </tr>);
    }
}

class TableCell extends React.Component{
    render(){
        if(this.props.isHeader){
            return <th>sdas</th>;
        }
        return <td>asdas</td>;
    }
}

export default class Table extends React.Component{
    constructor(props){
        super(props);
        
        const level = this._getLevel(props.columns);
        console.log(level);

        for(let i=0,j=props.columns.length;i<j;i+=1){
            console.log(this._getRootCellCountOfColumn(props.columns[i]));
        }
    }
    // 获取到表头深度
    _getLevel(columns,_level){
        let curLevel = 1;
        if(_level){
            curLevel = _level;
        }
        const levelRe = [];
        for(let i = 0,j=columns.length;i<j;i+=1){
            const colItem = columns[i];
            if(colItem.children){
                levelRe[i] = this._getLevel(colItem.children,curLevel+1);
            }else{
                levelRe[i] = curLevel;
            }
        }
        return this._maxOfArr(levelRe);
    }

    _maxOfArr(arr){
        let re = 0;
        for(let i = 0,j=arr.length;i<j;i+=1){
            if(re<arr[i]){
                re = arr[i];
            }
        }
        return re;
    }
    // 获取到根Cell的个数
    _getRootCellCountOfColumn(column){
        let re = 0;
        const children = column.children;
        if(!children){
            return 1;
        }
        for(let i = 0,j=children.length;i<j;i+=1){
            const colItem = children[i];
            if(colItem.children){
                re += this._getRootCellCountOfColumn(colItem);
            }else{
                re += 1;
            }
        }
        return re;
    }
  
   
    render(){
        const className = ['xz-table'];
        if(this.props.className){
            className.push(this.props.className);
        }
        return (<div>
            <table className={className.join(" ")}>
                <TableHeader/>
                <TableBody/>
            </table>
            <style>{'.c{color:red}'}</style>
        </div>)
    }
}