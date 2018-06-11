import React from 'react';
import Theme from '../theme';
import './index.less';


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