import  React from 'react';
import Common from '../../utils/common';
import './index.less';

/*
  mode dbclick|click|hover|rightclick
 
*/
class PopView extends React.Component{
    constructor(props){
        super(props);
        this.positionMode = props.positionMode||'fixed';
        if(['relative','absolute'].indexOf(this.positionMode)<0){
            this.positionMode = 'fixed';
        }
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
            },this.props.showDelay||300);
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
        },this.props.hideDelay||300);
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
    getBoundingClientRect(){
        if(this.positionMode==='fixed'){
            return this.root.getBoundingClientRect();
        }
        let target = this.root;
        if(this.root.root){
            target = this.root.root;
        }
        const left = target.offsetLeft;
        const top = target.offsetTop;
        const width=target.offsetWidth;
        const height = target.offsetHeight;
        return {
            width,
            height,
            left,
            top,
            bottom:top+height,
            right:left+width,
        };
    }
    getPopPositionStyle(){
        // this.props.offset
        // topleft|top|topright|righttop|right|rightbottom|bottomright|bottom|bottomleft|leftbottom|left|lefttop|
        const offset = this.props.offset || {};
        const bodyHeight = document.body.offsetHeight;
        const bodyWidth = document.body.offsetWidth;
        var rect = this.getBoundingClientRect();
        let pos = this.props.placement || 'bottom';
        if(bodyHeight - rect.bottom < 100){
            pos = 'top';
        }
        let style = {
        };
        if(pos === 'bottom'){
            style.top = Common.parseInt(rect.bottom)+ (offset.x||0);
            style.left = Common.parseInt(rect.left)+ (offset.x||0) + rect.width/2;
        } else if(pos === 'top'){
            style.top = Common.parseInt(rect.top) + (offset.x||0);
            style.left = Common.parseInt(rect.left)+ (offset.x||0) + rect.width/2;
        } else if(pos === 'left'){
            style.top =  Common.parseInt(rect.top) + (offset.y||0) + rect.height/2;
            style.left = Common.parseInt(rect.left)+ (offset.x||0);
        } else if(pos === 'right'){
            style.top =  Common.parseInt(rect.top) + (offset.y||0) + rect.height/2;
            style.left = Common.parseInt(rect.right)+ (offset.x||0);
        }else if(pos === 'topleft'){
            style.top = Common.parseInt(rect.top) + (offset.x||0); 
            style.left = Common.parseInt(rect.left)+ (offset.x||0);
        }else if(pos === 'topright'){
            style.top = Common.parseInt(rect.top) + (offset.x||0); 
            style.left = Common.parseInt(rect.right)+ (offset.x||0);
        }else if(pos === 'righttop'){
            style.top = Common.parseInt(rect.top) + (offset.x||0) + rect.height;
            style.left = Common.parseInt(rect.right)+ (offset.x||0);
        }else if(pos === 'rightbottom'){
            style.top = Common.parseInt(rect.top) + (offset.x||0);
            style.left = Common.parseInt(rect.right)+ (offset.x||0);
        }else if(pos === 'bottomleft'){
            style.top = Common.parseInt(rect.bottom)+ (offset.x||0);
            style.left = Common.parseInt(rect.right)+ (offset.x||0);
        }else if(pos === 'bottomright'){
            style.top = Common.parseInt(rect.bottom)+ (offset.x||0);
            style.left = Common.parseInt(rect.left)+ (offset.x||0);
        }else if(pos === 'leftbottom'){
            style.top = Common.parseInt(rect.top) + (offset.x||0);
            style.left = Common.parseInt(rect.left)+ (offset.x||0);
        }else if(pos ==='lefttop'){
            style.top = Common.parseInt(rect.top) + (offset.x||0) + rect.height;
            style.left = Common.parseInt(rect.left)+ (offset.x||0);
        }
        return {
            pos,
            style,
            rect,
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
        const classOverlayClassName = this.props.overlayClassName || '';
        var className =`xz-popview-content-${this.positionMode} ${classOverlayClassName}`+ ` xz-popview-trans-${pos.pos} `;
        // todo .. 将这个拎出一个组件 在组件中做一个mousewhell的位置重定位
        return <div onWheel={(e)=>{ e.preventDefault(); }} onMouseOver={()=>{
            this._clearTime();
            if(this.props.parentPopview){
                this.props.parentPopview._clearTime();
            }
        }} onMouseLeave={this.onMouseLeave.bind(this)} className={className} style={pos.style}>
            <div className={(this.state.show?`xz-pop-animate-${pos.pos}`:`xz-pop-animate-${pos.pos}-hide`)}>{this.props.renderContent({instance:this,placement:pos.pos,rect:pos.rect})}</div>
        </div>;
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
