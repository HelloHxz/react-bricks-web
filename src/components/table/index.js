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
    }
   
    render(){
        const className = ['xz-table'];
        if(this.props.className){
            className.push(this.props.className);
        }
        return (<table className={className.join(" ")}>
            <TableHeader/>
            <TableBody/>
        </table>)
    }
}