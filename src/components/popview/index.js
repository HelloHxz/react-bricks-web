import  React from 'react';
import Common from '../../utils/common';
import './index.less';

/*
  mode dbclick|click|hover|rightclick
 
*/
class PopView extends React.Component{
    constructor(props){
        super(props);
        this.initShow = !props.show?'noinit':props.show;
        this.state={
            show:'noinit'
        }
    }
    onMouseOver(e){
      this.show(e);
    }
    componentDidMount(){
        if(this.initShow === true){
            this.setState({
                show:true
            });
        }
    }
    componentWillReceiveProps(nextPrps){
        if(nextPrps.show===undefined){
            return;
        }
        if(nextPrps.show !== this.state.show){
            if(nextPrps.show){
                this._show();
            }else{
                this.hide();
            }
        }
    }
    show(e){
        this._clearTime();
        if(this.state.show===true){
            return;
        }
        if(e){
            e.stopPropagation();
            e.preventDefault();
        }
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
        const bodyHeight = document.body.offsetHeight;
        const bodyWidth = document.body.offsetWidth;
        var rect = this.root.getBoundingClientRect();
        let pos = this.props.placement || 'bottom';
        if(bodyHeight - rect.bottom < 100){
            pos = 'top';
        }
        let style = {
            left:Common.parseInt(rect.left)+Common.parseInt(rect.offsetX)+ (offset.y||0),
        };
        if(pos === 'bottom'){
            style.top = Common.parseInt(rect.top)+Common.parseInt(rect.offsetY)+Common.parseInt(rect.height) + (offset.x||0);
        } else if(pos === 'top'){
            style.bottom = bodyHeight - Common.parseInt(rect.top) + Common.parseInt(rect.offsetY) + (offset.x||0);
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
        if(!this.root){
            return null;
        }
        if(this.state.show==='noinit'){
            return null;
        }
        if(!this.props.renderContent){
            return null;
        }
        const pos = this.getPopPositionStyle();
        var className ='xz-popview-content '+(this.state.show?`xz-pop-animate-${pos.pos}`:`xz-pop-animate-${pos.pos}-hide`);
        // todo .. 将这个拎出一个组件 在组件中做一个mousewhell的位置重定位
        return <div onWheel={(e)=>{ e.preventDefault(); }} onMouseOver={()=>{
            this._clearTime();
        }} onMouseLeave={this.onMouseLeave.bind(this)} className={className} style={pos.style}>{this.props.renderContent(this)}</div>;
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
        const mouseEvent = this.getEvent();
        const element = this.props.children;
        return (
            <React.Fragment>
                <element.type {...element.props} {...mouseEvent} ref={(root)=>{this.root = root;}}></element.type>
                {this.renderContent()}
            </React.Fragment>
        );
    }
}



export default PopView;
