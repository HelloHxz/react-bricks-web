import React from 'react';
import TableHeaderRow from './TableHeaderRow';
import TableHeaderCell from './TableHeaderCell';

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
    componentDidMount = ()=>{
        if(this.props.fixedLeftCount||this.props.fixedRightCount){
            const mainHeaderRows = this.props.root.mainTable.mainHeader.headerDom.children;
            const curHeaderRows = this.headerDom.children;
            for(var i=0,j=curHeaderRows.length;i<j;i+=1){
                var cells = curHeaderRows[i].children;
                    for(var n=0,m=cells.length;n<m;n+=1){
                        if(this.props.fixedRightCount){
                            const allCount = mainHeaderRows[i].children.length;
                            cells[n].style.height = mainHeaderRows[i].children[allCount-m+n].offsetHeight+"px";
                        }else{
                            cells[n].style.height = mainHeaderRows[i].children[n].offsetHeight+"px";
                        }
                    }
            }
        }
    }
    _createRows = (columns,rows,isInit) => {
        const range = [0,columns.length];
        if(this.props.fixedLeftCount&&isInit){
            range[1] = this.props.fixedLeftCount; 
        }
        if(this.props.fixedRightCount&&isInit){
            range[0] = columns.length - this.props.fixedRightCount; 
        }
        for(let i = range[0],j=range[1];i<j;i+=1){
            const colItem = columns[i];
            const _level = colItem.__level - 1;
            if(!rows[_level]){
                rows[_level] = [];
            }
            rows[_level].push(
                <TableHeaderCell {...this.props} key={`${colItem.key||''}_${colItem.title}`} cellConfig={colItem} />
            );
            if(colItem.children){
                this._createRows(colItem.children,rows,false);
            }
        }
    }
    render(){
        const headerRows = [];
        this._createRows(this.props.columns,headerRows,true);
        const rows = [];
        for(var i=0,j=headerRows.length;i<j;i+=1){
            rows.push(<TableHeaderRow key={i}>
                    {headerRows[i]}
                </TableHeaderRow>);
        }
        return (<thead ref={(headerDom)=>{ this.headerDom = headerDom; }}>
            {rows}
        </thead>);
    }
}

export default TableHeader;