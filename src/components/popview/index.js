import  React from 'react';
import Common from '../../utils/common';
import './index.less';

/*
  mode dbclick|click|hover|rightclick
 
*/
class PopView extends React.Component{
    constructor(props){
        super(props);
        this.state={
            show:!props.show?'noinit':props.show
        }
    }
    onMouseOver(e){
        e.stopPropagation();
        e.preventDefault();
        this._clearTime();
        this.setState({
            show:true
        });
    }
    _clearTime(){
        if(this.timeoutid){
            window.clearTimeout(this.timeoutid);
            this.timeoutid = null;
        }
    }
    onMouseLeave(e){
       e.stopPropagation();
       e.preventDefault();
       this.hidePop();
    }
    hidePop(){
        this._clearTime();
        this.timeoutid = setTimeout(()=>{
            this.setState({
                show:false
            },()=>{
                // setTimeout(()=>{
                //     this.setState({show:'noinit'});
                // },300);
            });
        },300);
    }
    hide(){
        this.hidePop();
    }
    getPopPositionStyle(){
        var rect = this.root.getBoundingClientRect();
        return {
            top:Common.parseInt(rect.top)+Common.parseInt(rect.offsetY)+Common.parseInt(rect.height),
            left:Common.parseInt(rect.left)+Common.parseInt(rect.offsetX),
        };
    }
    renderContent(){
        if(this.state.show==='noinit'){
            return null;
        }
        if(!this.props.renderContent){
            return null;
        }
        var className ='xz-popview-content '+(this.state.show?'xz-pop-animate-bottom':'xz-pop-animate-bottom-hide')
        return <div className={className} style={this.getPopPositionStyle()}>{this.props.renderContent(this)}</div>;
    }
    getEvent(){
        var mode = this.props.mode || 'hover'; //dbclick|click|hover|rightclick
        return {
            onMouseOver:this.onMouseOver.bind(this),
            onMouseLeave:this.onMouseLeave.bind(this)
        };
    }
    render(){
        const p = {};
        const mouseEvent = this.getEvent();
        if(this.props.style){
            p.style = this.props.style;
        }
        if(this.props.className){
            p.className = this.props.className;
        }
        return (<div {...p} {...mouseEvent} ref={(root)=>{this.root = root;}}>
            {this.props.children}
            {this.renderContent()}
             </div>);
    }
}



export default PopView;
