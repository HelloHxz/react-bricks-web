import React from 'react';
import TableHeader from './TableHeader';
import XZ from '../xz';
import TableBody from './TableBody';

class SingleTable extends React.Component{
    constructor(props){
        super(props);
    }

    onScroll = (e)=>{
        const mark = e.target.getAttribute("data-mark");
        this.props.root.onScroll(mark,e);
    }
    onWheel = (e)=>{
        e.preventDefault();
        const mark = e.target.getAttribute("data-mark");
        let scrollTop = this.ScrollView.scrollTop;
        if(e.nativeEvent.deltaY>0){
            scrollTop+=20;
        }else{
            scrollTop-=20;
        }
        this.props.root.onBodyWheel(mark,scrollTop,e);
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
        const scroll = {};
        scroll.onScroll = this.onScroll.bind(this);
        if(this.props.root.useWheelToScroll()){
          scroll.onWheel = this.onWheel.bind(this);
        }
       
        if(this.props.tableClassName){
            tableClassName.push(this.props.tableClassName);
        }
        const outerClassName = ["xz-table-outer-wrapper"];
        if(this.props.fixedLeftCount){
            outerClassName.push("xz-table-outer-fixedleft");
            if(XZ.browser.isIE9()){
                outerClassName.push("xz-table-outer-fixedleft-ie");
            }
        }else if(this.props.fixedRightCount){
            outerClassName.push("xz-table-outer-fixedright");
            if(XZ.browser.isIE9()){
                outerClassName.push("xz-table-outer-fixedright-ie");
            }
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
            <div data-mark={this.props.mark} ref={(ScrollView)=>{ this.ScrollView = ScrollView; }} {...p} {...scroll} className='xz-table-inner-wrapper'>
                <table ref={(table)=>{this.table = table;}} className={tableClassName.join(" ")}>
                    <TableHeader ref={(mainHeader)=>{ this.mainHeader = mainHeader; }} {...this.props} table={this.props.root}/>
                    <TableBody ref={(mainBody)=>{ this.mainBody = mainBody; }} {...this.props} table={this.props.root} />
                </table>
            </div>
            {fixedHeader}
        </div>)
    }
}

export default SingleTable;