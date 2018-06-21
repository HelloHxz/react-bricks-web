import React from 'react';
import Theme from '../theme';
import XZ from '../xz';
import './index.less';



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

    static _getRootCellArr = (columns,outArr,parentGroupIndex) => {
        for(let i=0,j=columns.length;i<j;i+=1){
            const colItem = columns[i];
            const p = (!parentGroupIndex&&parentGroupIndex!==0)?i:parentGroupIndex;
            if(colItem.children){
                TableUtil._getRootCellArr(colItem.children,outArr,p);
            }else{
                colItem.__isRootCell = true;
                colItem.__groupIndex = p;
                outArr.push(colItem);
            }
        }
    }
}

class StyleManager extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            columnsWidthInfo:this.convertRootArrToWidthInfo(props)
        };
    }
    componentWillReceiveProps = (nextProps) => {
        const columnsWidthInfo = this.convertRootArrToWidthInfo(nextProps);
        if(JSON.stringify(this.state.columnsWidthInfo)!==JSON.stringify(columnsWidthInfo)){
            this.setState({
                columnsWidthInfo,
            });
        }
    }
    static _getCellClassName = (tableid,key) => {
        return `xz-table-cell-${tableid}-${key}`;
    }

    parseWidth = (w) => {
        if(!w){
            return '100px';
        }
        let _w = w.toString();
        if(_w.indexOf('px')<0&&_w.indexOf('%')<0&&_w!=='auto'){
            _w = _w+'px';
        }
        return _w;
    }

    convertRootArrToWidthInfo = (props)=>{
        const re = [];
        for(let i =0,j=props.root.rootCellArr.length;i<j;i+=1){
            const item = props.root.rootCellArr[i];
            re.push({
                key:item.key,
                width:this.parseWidth(item.width)
            });
        }
        return re;
    }
    
    render(){
        const re = [];
        for(let i =0,j=this.state.columnsWidthInfo.length;i<j;i+=1){
            const item = this.state.columnsWidthInfo[i];
            re.push(`.${StyleManager._getCellClassName(this.props.root.tableid,item.key)}{ width:${item.width} } `);
        }
        return <style>{re}</style>
    }
}
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
            rows.push(<TableRow key={i}>
                    {headerRows[i]}
                </TableRow>);
        }
        return (<thead ref={(headerDom)=>{ this.headerDom = headerDom; }}>
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
        let innnerClassName = {};

        if(cellConfig.__isRootCell){
            innnerClassName.className =`xz-table-cell-inner ${StyleManager._getCellClassName(this.props.root.tableid,cellConfig.key)}` ;
        }else{
            innnerClassName.className ='xz-table-cell-inner';
        }
        return <th {...p}><div {...innnerClassName}>{cellConfig.title}</div></th>;
    }
}
class TableBody extends React.Component{
    render(){
        const dataSource = this.props.dataSource || [];
        const rows = [];
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
        return (<tbody>
                {rows}
            </tbody>);
    }
}

class TableRow extends React.Component{
    render(){
        return (<tr data-rowkey={this.props.rowKey}>
           {this.props.children}
        </tr>);
    }
}


class TableCell extends React.Component{
    render(){
        const {cellConfig,table} = this.props;
        var innerp = {
            className:`xz-table-cell-inner ${StyleManager._getCellClassName(table.tableid,cellConfig.key)}`
        };
        return <td><div {...innerp}>asdasdas</div></td>;
    }
}


class SingleTable extends React.Component{
    constructor(props){
        super(props);
    }

    onScroll = (e)=>{
        const mark = e.target.getAttribute("data-mark");
        this.props.root.onScroll(mark,e);
    }

    componentDidMount = () => {
        // register window resize
        // register column resize
        if(this.props.mark==='main'){
           
        }
    }

    render(){
        const tableClassName = ['xz-table'];
        const p = {};
       
        if(this.props.tableClassName){
            tableClassName.push(this.props.tableClassName);
        }
        const outerClassName = ["xz-table-outer-wrapper"];
        if(this.props.fixedLeftCount){
            outerClassName.push("xz-table-outer-fixedleft");
        }else if(this.props.fixedRightCount){
            outerClassName.push("xz-table-outer-fixedright");
        }else{
            outerClassName.push("xz-table-outer-fixedmain");
        }
        let fixedHeader = null;
        if(this.props.fixedHeader){
            fixedHeader = (<div className='xz-table-fixed-header-outer'>
            <div ref={(mainFixedHeader)=>{this.mainFixedHeader = mainFixedHeader;}} className='xz-table-fixed-header-inner'>
              <table className={tableClassName.join(" ")}>
                  <TableHeader ref={(fixedTopHeader)=>{ this.fixedTopHeader = fixedTopHeader; }} {...this.props} table={this.props.root}/>
              </table>
            </div>
          </div>);
        }
        return (<div className={outerClassName.join(' ')}>
            <div data-mark={this.props.mark} ref={(scrollY)=>{ this.scrollY = scrollY; }} {...p} onScroll={this.onScroll.bind(this)} className='xz-table-inner-wrapper'>
                <table ref={(table)=>{this.table = table;}} className={tableClassName.join(" ")}>
                    <TableHeader ref={(mainHeader)=>{ this.mainHeader = mainHeader; }} {...this.props} table={this.props.root}/>
                    <TableBody ref={(mainBody)=>{ this.mainBody = mainBody; }} {...this.props} table={this.props.root} />
                </table>
            </div>
            {fixedHeader}
        </div>)
    }
}

export default class Table extends React.Component{
    constructor(props){
        super(props);
        this.rootCellArr = [];
        const level = TableUtil._getLevel(props.columns);
        TableUtil._setRowSpan(props.columns,level);
        TableUtil._getRootCellArr(props.columns,this.rootCellArr);
        this.tableid = 'xztable-'+ XZ._getSystemUniqueNum();
        this.curMark = null;
        this.setClearMarkTimeout = null;
        this.os = XZ.isMac()?'mac':'other';
        this.state = {
            overflow:{x:false,y:false}
        };
    }

    componentDidMount = ()=>{
        this.resizeID = XZ.listenerResizeEvent(()=>{
            this.reLayout();
        });
    }
    componentWillUnmount = ()=>{
        XZ.removeResizeListener(this.resizeID);
    }
    reLayout = ()=>{
        if(!this.mainTable){
            return;
        }
        const overflow = {x:false,y:false};
        overflow.x = this.mainTable.table.offsetWidth>=this.mainTable.scrollY.offsetWidth;
        // overflow.y = this.mainTable.offsetHeight>=this.mainTable.scrollY.offsetHeight;
        if(overflow.x!==this.state.overflow.x){
            this.setState({
                overflow
            });
        }
    }

    resetPos = ()=>{

    }

    onScroll(mark,e){
        if(!this.curMark){
            this.curMark = mark;
        }
        if(this.curMark!==mark){
            return;
        }
        if(mark==='left'){
            this.mainTable.scrollY.scrollTop = e.target.scrollTop;
            if(this.rightTable){
                this.rightTable.scrollY.scrollTop = e.target.scrollTop;
            }
        }else if(mark==='main'){
            if(this.leftTable){
                this.leftTable.scrollY.scrollTop = e.target.scrollTop;
            }
            if(this.mainTable.mainFixedHeader){
                this.mainTable.mainFixedHeader.scrollLeft = e.target.scrollLeft;
            }
            if(this.rightTable){
                this.rightTable.scrollY.scrollTop = e.target.scrollTop;
            }
        }else if(mark==='right'){
            if(this.leftTable){
                this.leftTable.scrollY.scrollTop = e.target.scrollTop;
            }
            if(this.mainTable){
                this.mainTable.scrollY.scrollTop = e.target.scrollTop;
            }
        }
        if(this.setClearMarkTimeout){
            window.clearTimeout(this.setClearMarkTimeout);
            this.setClearMarkTimeout = null;
        }
        this.setClearMarkTimeout = setTimeout(()=>{
            this.curMark = null;
        },40);
        
    }
 
    render(){
        const p={};
        if(this.props.style){
            p.style = this.props.style;
        }
        return (<div {...p}>
            <div style={{position:'relative',height:'100%',width:'100%'}}>
                <SingleTable mark='main' ref={(mainTable)=>{ 
                    this.mainTable = mainTable;  
                    if(this.mainTable){
                        this.reLayout();
                    }
                }} {...this.props} root={this}/>
                { this.state.overflow.x?(<div className={`xz-table-pos-left xz-table-pos-${this.os}`}>
                    <SingleTable mark='left' ref={(leftTable)=>{this.leftTable = leftTable;}} fixedLeftCount={1} {...this.props} root={this}/>
                </div>):null }
                { this.state.overflow.x?(<div className={`xz-table-pos-right xz-table-pos-${this.os}`}>
                    <SingleTable mark='right' ref={(rightTable)=>{this.rightTable = rightTable;}} fixedRightCount={2} {...this.props} root={this}/>
                </div>):null }
            </div>
            <StyleManager root={this}/>
        </div>)
    }
}