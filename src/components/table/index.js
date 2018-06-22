import React from 'react';
import XZ from '../xz';
import './index.less';
import TableUtil from './TableUtil';
import StyleManager from './StyleManager';
import SingleTable from './SingleTable';


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
        this.mouseWheeelTimeout = null;
        this.isWheeling = false;
        this.os = XZ.browser.isMac()?'mac':'other';
        this.state = {
            overflow:{x:false,y:false},
            hoverRowKey:''
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
        overflow.x = this.mainTable.table.offsetWidth>=this.mainTable.ScrollView.offsetWidth;
        // overflow.y = this.mainTable.offsetHeight>=this.mainTable.ScrollView.offsetHeight;
        if(overflow.x!==this.state.overflow.x){
            this.setState({
                overflow
            });
        }
    }

    resetScrollPosition = ()=>{
        const scrollTop = this.mainTable.ScrollView.scrollTop;
        const scrollLeft = this.mainTable.ScrollView.scrollLeft;
        if(this.rightTable){
            this.rightTable.ScrollView.scrollTop = scrollTop;
        }
        if(this.leftTable){
            this.leftTable.ScrollView.scrollTop = scrollTop;
        }
        if(this.mainTable.mainFixedHeader){
            this.mainTable.mainFixedHeader.scrollLeft = scrollLeft;
        }
    }
    onRowMouseLeave = (e) => {
        console.log("leave");
    }
    onBodyMouseLeave = (e)=>{
        if(this.state.hoverRowKey===""){
            return;
        }
        this.setState({
            hoverRowKey:""
        });
    }
    
    onRowMouseOver = (e) => {
        const rowKey = e.currentTarget.getAttribute("data-rowkey");
        if(this.state.hoverRowKey!==rowKey){
            this.setState({
                hoverRowKey:rowKey
            });
        }
    }

    useWheelToScroll(){
        // 在IE下滚动不是很协调 所以统一用wheel去滚动
        return XZ.browser.isIE9()&&this.state.overflow.x;
    }

    onBodyWheel(mark,scrollTop,e){
        this.isWheeling = true;
        if(this.mouseWheeelTimeout){
            window.clearTimeout(this.mouseWheeelTimeout);
            this.mouseWheeelTimeout = null;
        }
        this.mouseWheeelTimeout = setTimeout(()=>{
            this.isWheeling = false;
        },400);
        if(this.rightTable){
            this.rightTable.ScrollView.scrollTop = scrollTop;
        }
        this.mainTable.ScrollView.scrollTop = scrollTop;
        if(this.leftTable){
            this.leftTable.ScrollView.scrollTop = scrollTop;
        }
    }

    onScroll(mark,e){
        if(!this.curMark){
            this.curMark = mark;
        }
        if(this.curMark!==mark){
            return;
        }
        const scrollTop = e.target.scrollTop;
        const scrollLeft = e.target.scrollLeft;
        if(mark==='left'){
            if(!(this.isWheeling &&this.useWheelToScroll())){
                this.mainTable.ScrollView.scrollTop =scrollTop;
                if(this.rightTable){
                    this.rightTable.ScrollView.scrollTop = scrollTop;
                }
            }
        }else if(mark==='main'){
            if(!(this.isWheeling &&this.useWheelToScroll())){
                if(this.leftTable){
                    this.leftTable.ScrollView.scrollTop = scrollTop;
                }
                if(this.rightTable){
                    this.rightTable.ScrollView.scrollTop = scrollTop;
                }
            }
            
            if(this.mainTable.mainFixedHeader){
                this.mainTable.mainFixedHeader.scrollLeft = scrollLeft;
              
            }
            if(this.state.overflow.x&&this.rightWrapper&&this.leftWrapper){
                if(scrollLeft === 0){
                    this.leftWrapper.className = `xz-table-pos-left xz-table-pos-${this.os}`;
                }else{
                    this.leftWrapper.className = `xz-table-pos-left xz-table-fixed-left-shadow xz-table-pos-${this.os}`;
                }
                if(scrollLeft+this.mainTable.ScrollView.offsetWidth >= this.mainTable.ScrollView.scrollWidth){
                    this.rightWrapper.className = `xz-table-pos-right xz-table-pos-${this.os}`
                }else{
                    this.rightWrapper.className = `xz-table-pos-right xz-table-fixed-right-shadow xz-table-pos-${this.os}`;
                }
            }
            
        }else if(mark==='right'){
            if(!(this.isWheeling &&this.useWheelToScroll())){
                if(this.leftTable){
                    this.leftTable.ScrollView.scrollTop = scrollTop;
                }
                if(this.mainTable){
                    this.mainTable.ScrollView.scrollTop = scrollTop;
                }
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
                <SingleTable mark='main' hoverRowKey={this.state.hoverRowKey} ref={(mainTable)=>{ 
                    this.mainTable = mainTable;  
                    if(this.mainTable){
                        this.reLayout();
                    }
                }} {...this.props} root={this}/>
                { this.state.overflow.x?(<div
                ref={(leftWrapper)=>{
                    this.leftWrapper = leftWrapper;
                }}
                className={`xz-table-pos-left xz-table-pos-${this.os}`}>
                    <SingleTable mark='left' hoverRowKey={this.state.hoverRowKey} ref={(leftTable)=>{this.leftTable = leftTable;}} fixedLeftCount={1} {...this.props} root={this}/>
                </div>):null }
                { this.state.overflow.x?(<div
                ref={(rightWrapper)=>{
                    this.rightWrapper = rightWrapper;
                }}
                className={`xz-table-pos-right xz-table-fixed-right-shadow xz-table-pos-${this.os}`}>
                    <SingleTable
                        mark='right'
                        hoverRowKey={this.state.hoverRowKey}
                        ref={(rightTable)=>{this.rightTable = rightTable;}}
                        fixedRightCount={2}
                        {...this.props} 
                        root={this}/>
                </div>):null }
            </div>
            <StyleManager root={this}/>
        </div>)
    }
}