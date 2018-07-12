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
        this.hideMode = props.hideMode || 'mouseleave'; // mouseleave|blur
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
                this._hide();
            }
        }
    }
    show(e){
        this.clearTimeout();
        if(this.state.show===true){
            this.preventHide();
            return;
        }
        if(e){
            e.stopPropagation();
            e.preventDefault();
        }
        var mode = this.props.mode || 'hover';
        let delay = 300;
        if(this.props.showDelay||this.props.showDelay===0){
            delay = this.props.hideDelay;
        }
        if(mode==='hover'){
            this.timeoutid = setTimeout(()=>{
                this._show();
            },delay);
        }else{
            this._show();
        }
       
    }
    _show(){
        this.setState({
            show:true
        });
        this.focus();
        if(this.props.onShow){
            this.props.onShow(this);
        }
    }
    clearTimeout(){
        if(this.timeoutid){
            window.clearTimeout(this.timeoutid);
            this.timeoutid = null;
        }
    }
    onMouseLeave(e){
       e.stopPropagation();
       e.preventDefault();
       if(this.hideMode === 'blur'){
           return;
       }
       this.hide();
    }
    onMouseOverWhenClickMode(){
        this.clearTimeout();
    }
    
    preventHide(){
        this.clearTimeout();
        this.focus();
    }

    hide(){
        this.clearTimeout();
        if(this.state.show===false||this.state.show==='noinit'){
            return;
        }
        let delay = 300;
        if(this.props.showDelay||this.props.showDelay===0){
            delay = this.props.hideDelay;
        }
        this.timeoutid = setTimeout(()=>{
           this._hide();
        },delay);
    }
    _hide(){
        this.setState({
            show:false
        },()=>{
            setTimeout(()=>{
                this.setState({show:'noinit'});
                if(this.props.onHide){
                    this.props.onHide(this);
                }
            },100);
        });
    }
    getRootWidth(){
        let target = this.root;
        if(this.root.root){
            target = this.root.root;
        }
        return target.offsetWidth;
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
        const rootWidth = this.getRootWidth();
        var rect = this.getBoundingClientRect();
        let pos = this.props.placement || 'bottom';
        if(bodyHeight - rect.bottom < 100){
            pos = 'top';
        }
        let style = {
        };
        if(pos === 'bottom'){
            style.top = Common.parseInt(rect.bottom)+ (offset.y||0);
            style.left = Common.parseInt(rect.left)+ (offset.x||0) + rect.width/2;
            if(this.props.initOverLayerWidth){
                style.width = rootWidth;
            }
        } else if(pos === 'top'){
            style.top = Common.parseInt(rect.top) + (offset.y||0);
            style.left = Common.parseInt(rect.left)+ (offset.x||0) + rect.width/2;
            if(this.props.initOverLayerWidth){
                style.width = rootWidth;
            }
        } else if(pos === 'left'){
            style.top =  Common.parseInt(rect.top) + (offset.y||0) + rect.height/2;
            style.left = Common.parseInt(rect.left)+ (offset.x||0);
        } else if(pos === 'right'){
            style.top =  Common.parseInt(rect.top) + (offset.y||0) + rect.height/2;
            style.left = Common.parseInt(rect.right)+ (offset.x||0);
        }else if(pos === 'topleft'){
            style.top = Common.parseInt(rect.top) + (offset.y||0); 
            style.left = Common.parseInt(rect.right)+ (offset.x||0);
            if(this.props.initOverLayerWidth){
                style.width = rootWidth;
            }
        }else if(pos === 'topright'){
            style.top = Common.parseInt(rect.top) + (offset.y||0); 
            style.left = Common.parseInt(rect.left)+ (offset.x||0);
            if(this.props.initOverLayerWidth){
                style.width = rootWidth;
            }
        }else if(pos === 'righttop'){
            style.top = Common.parseInt(rect.top) + (offset.y||0) + rect.height;
            style.left = Common.parseInt(rect.right)+ (offset.x||0);
        }else if(pos === 'rightbottom'){
            style.top = Common.parseInt(rect.top) + (offset.y||0);
            style.left = Common.parseInt(rect.right)+ (offset.x||0);
        }else if(pos === 'bottomleft'){
            style.top = Common.parseInt(rect.bottom)+ (offset.x||0);
            style.left = Common.parseInt(rect.right)+ (offset.x||0);
            if(this.props.initOverLayerWidth){
                style.width = rootWidth;
            }
        }else if(pos === 'bottomright'){
            style.top = Common.parseInt(rect.bottom)+ (offset.y||0);
            style.left = Common.parseInt(rect.left)+ (offset.x||0);
            if(this.props.initOverLayerWidth){
                style.width = rootWidth;
            }
        }else if(pos === 'leftbottom'){
            style.top = Common.parseInt(rect.top) + (offset.y||0);
            style.left = Common.parseInt(rect.left)+ (offset.x||0);
        }else if(pos ==='lefttop'){
            style.top = Common.parseInt(rect.top) + (offset.y||0) + rect.height;
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
        const popWrapperClassName = this.props.popWrapperClassName || '';
        var className =`xz-popview-content-${this.positionMode} ${popWrapperClassName}`+ ` xz-popview-trans-${pos.pos} ${this.props.popLayerClassName||''}`;
        // todo .. 将这个拎出一个组件 在组件中做一个mousewhell的位置重定位
        return <div onWheel={(e)=>{ e.preventDefault(); }} onMouseOver={()=>{
            this.clearTimeout();
            if(this.props.parentPopview){
                this.props.parentPopview.clearTimeout();
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
            onMouseLeave:this.onMouseLeave.bind(this),
        };
    }
    onBlur=()=>{
        this.hide();
    }
    focus=()=>{
        if(this.hideMode==='blur'&&this.AInstance){
            this.AInstance.focus();
        }
    }
    render(){
        var mode = this.props.mode || 'hover';
        const mouseEvent = this.getEvent();
        const element = this.props.children;
        let A = null;
        if(this.hideMode==='blur'){
            A= <input style={{width:0,height:0,position:'fixed',left:-999}}  onBlur={this.onBlur.bind(this)} ref={(focusA)=>{
                this.AInstance = focusA;
            }}/>
        }
        return (
            <React.Fragment>
                {A}
                <element.type {...element.props} {...mouseEvent} ref={(root)=>{this.root = root;}}></element.type>
                {this.renderContent()}
            </React.Fragment>
        );
    }
}



export default PopView;
