import React from 'react';

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

export default StyleManager;