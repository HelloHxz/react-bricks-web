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
      this.show(e);
    }
    show(e){
        this._clearTime();
        if(this.state.show===true){
            return;
        }
        e.stopPropagation();
        e.preventDefault();
        var mode = this.props.mode || 'hover';
        if(mode==='hover'){
            this.timeoutid = setTimeout(()=>{
                this._show();
            },300);
        }else{
            this._show();
        }
       
    }
    _show(){
        this.setState({
            show:true
        });
        if(this.props.onShow){
            this.props.onShow(this);
        }
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
    onMouseOverWhenClickMode(){
        this._clearTime();
    }
    hidePop(){
        this._clearTime();
        if(this.state.show===false||this.state.show==='noinit'){
            return;
        }
        this.timeoutid = setTimeout(()=>{
           this.hide();
        },300);
    }
    hide(){
        this.setState({
            show:false
        },()=>{
            setTimeout(()=>{
                this.setState({show:'noinit'});
                if(this.props.onHide){
                    this.props.onHide(this);
                }
            },300);
        });
    }
    getPopPositionStyle(){
        // this.props.offset
        const offset = this.props.offset || {};
        var rect = this.root.getBoundingClientRect();
        let pos = 'top';
        let style = {
            left:Common.parseInt(rect.left)+Common.parseInt(rect.offsetX)+ (offset.y||0),
        };
        if(pos === 'bottom'){
            style.top = Common.parseInt(rect.top)+Common.parseInt(rect.offsetY)+Common.parseInt(rect.height) + (offset.x||0);
        } else if(pos === 'top'){
            style.bottom = document.body.offsetHeight - Common.parseInt(rect.top) + Common.parseInt(rect.offsetY) + (offset.x||0);
        }
        return {
            pos,
            style,
        };
    }
    getContentEvent(){
        var mode = this.props.mode || 'hover'; //dbclick|click|hover|rightclick
        if(mode==='click'){
            return {
            };
        }
        return {};
    }
    renderContent(){
        if(this.state.show==='noinit'){
            return null;
        }
        if(!this.props.renderContent){
            return null;
        }
        const pos = this.getPopPositionStyle();
        var className ='xz-popview-content '+(this.state.show?`xz-pop-animate-${pos.pos}`:`xz-pop-animate-${pos.pos}-hide`)
        return <div className={className} style={pos.style}>{this.props.renderContent(this)}</div>;
    }
    getEvent(){
        var mode = this.props.mode || 'hover'; //dbclick|click|hover|rightclick
        if(mode==='click'){
            return {
                onClick:this.show.bind(this),
                onMouseLeave:this.onMouseLeave.bind(this),
                onMouseOver:this.onMouseOverWhenClickMode.bind(this),
            };
        }
        return {
            onMouseOver:this.onMouseOver.bind(this),
            onMouseLeave:this.onMouseLeave.bind(this)
        };
    }
    render(){
        var mode = this.props.mode || 'hover';
        const p = {};
        const mouseEvent = this.getEvent();
        if(this.props.style){
            p.style = this.props.style;
        }
        if(this.props.className){
            p.className = this.props.className;
        }
        // to do 使用 Fragment 和 cloneElement 去掉包装
        // <element.type {...element.props} {...props}>{children}</element.type>
        // https://reactjs.org/docs/react-api.html#cloneelement
        return (<div {...p} {...mouseEvent} ref={(root)=>{this.root = root;}}>
            {this.props.children}
            {this.renderContent()}
        </div>);
    }
}



export default PopView;
