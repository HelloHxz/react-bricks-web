import React from 'react';
import './index.less';

class TableLayout extends React.Component {
    render(){
        const p = {
            className:['xz-tablelayout']
        };
        if(this.props.className){
            p.className.push(this.props.className);
        }
        if(this.props.style){
            p.style = this.props.style;
        }
        p.className = p.className.join(' ');

        return <div {...p}>{this.props.children}</div>
    }
}

class Cell extends React.Component{
    render(){
        const p = {
            className:['xz-tablelayout-cell']
        };
        if(this.props.className){
            p.className.push(this.props.className);
        }
        if(this.props.style){
            p.style = this.props.style;
        }
        p.className = p.className.join(' ');
        return (<div {...p}>{this.props.children}</div>);
    }
}

TableLayout.Cell = Cell;

export default TableLayout;