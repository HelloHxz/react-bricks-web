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
        this.clearShowTimeout();
        this.clearDestoryTimeout();
        if(this.state.show===true){
            this.preventHide();
            return;
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
    clearShowTimeout(){
        if(this.timeoutid){
            window.clearTimeout(this.timeoutid);
            this.timeoutid = null;
        }
    }
    onMouseLeave(e){
       if(this.hideMode === 'blur'){
           return;
       }
       this.hide();
    }
    onMouseOverWhenClickMode(){
        this.clearShowTimeout();
    }
    
    preventHide(){
        this.clearShowTimeout();
        this.clearDestoryTimeout();
        this.focus();
    }

    clearDestoryTimeout(){
        if(this.destoryTimeoutID){
            window.clearTimeout(this.destoryTimeoutID);
            this.destoryTimeoutID = null;
        }
    }

    hide(timeout){
        if(window.xzdebug===true){
            return;
        }
        this.clearShowTimeout();
        if(this.state.show===false||this.state.show==='noinit'){
            return;
        }
   
        let delay = 300;
        if(timeout===0||timeout){
            delay = timeout;
        }else{
            if(this.props.showDelay||this.props.showDelay===0){
                delay = this.props.hideDelay;
            }
        }
      
        if(this.props.parentPopview){
            this.props.parentPopview.hide(timeout);
        }
        this.timeoutid = setTimeout(()=>{
           this._hide();
        },delay);
    }
    _hide(){
        this.setState({
            show:false
        },()=>{
            this.destoryTimeoutID = setTimeout(()=>{
                this.setState({show:'noinit'});
                if(this.props.onHide){
                    this.props.onHide(this);
                }
            },200);
        });
    }

    componentWillUnmount(){
        this.clearShowTimeout();
        this.clearDestoryTimeout();
    }
   
    getContentEvent(){
        var mode = this.props.mode || 'hover'; //dbclick|click|hover|rightclick
        if(mode==='click'){
            return {
            };
        }
        return {};
    }
    getRoot(){
        let target = this.triggerRoot;
        if(target.root){
            target = target.root;
        }
        return target;
    }
    renderContent(){
        if(!this.triggerRoot){
            return null;
        }
        if(this.state.show==='noinit'){
            return null;
        }
        if(!this.props.renderContent){
            return null;
        }
        return <PopWrapper {...this.props} triggerRoot={this.getRoot()} popview={this} show={this.state.show} positionMode={this.positionMode}/>
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
                <element.type {...element.props} {...mouseEvent} ref={(root)=>{this.triggerRoot = root;}}></element.type>
                {this.renderContent()}
            </React.Fragment>
        );
    }
}


class PopWrapper extends React.Component{
    constructor(props){
        super(props);
        this.triggerRoot = props.triggerRoot;
        this.positionMode = props.positionMode;
        this.state = {
            show:props.show===true?'preshow':props.show
        };
    }
    componentDidMount(){
        this.setState({
            show:true
        });
    }
    componentWillReceiveProps(nextProps){
        if(this.state.show !== nextProps.show){
            this.setState({
                show:nextProps.show
            });
        }
    }
  
    getBoundingClientRect(){
        if(this.positionMode==='fixed'){
            return this.props.triggerRoot.getBoundingClientRect();
        }
        let target = this.triggerRoot;
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
    getStyleByPlacement(placement,triggerRect){
        const offset = this.props.offset || {};
        let style = {
        };
        if(placement === 'bottom'){
            style.top = Common.parseInt(triggerRect.bottom)+ (offset.y||0);
            style.left = Common.parseInt(triggerRect.left)+ (offset.x||0) + triggerRect.width/2;
            if(this.props.initOverLayerWidth){
                style.width = triggerRect.width;
            }
        } else if(placement === 'top'){
            style.top = Common.parseInt(triggerRect.top) + (offset.y||0);
            style.left = Common.parseInt(triggerRect.left)+ (offset.x||0) + triggerRect.width/2;
            if(this.props.initOverLayerWidth){
                style.width = triggerRect.width;
            }
        } else if(placement === 'left'){
            style.top =  Common.parseInt(triggerRect.top) + (offset.y||0) + triggerRect.height/2;
            style.left = Common.parseInt(triggerRect.left)+ (offset.x||0);
        } else if(placement === 'right'){
            style.top =  Common.parseInt(triggerRect.top) + (offset.y||0) + triggerRect.height/2;
            style.left = Common.parseInt(triggerRect.right)+ (offset.x||0);
        }else if(placement === 'topleft'){
            style.top = Common.parseInt(triggerRect.top) + (offset.y||0); 
            style.left = Common.parseInt(triggerRect.right)+ (offset.x||0);
            if(this.props.initOverLayerWidth){
                style.width = triggerRect.width;
            }
        }else if(placement === 'topright'){
            style.top = Common.parseInt(triggerRect.top) + (offset.y||0); 
            style.left = Common.parseInt(triggerRect.left)+ (offset.x||0);
            if(this.props.initOverLayerWidth){
                style.width = triggerRect.width;
            }
        }else if(placement === 'righttop'){
            style.top = Common.parseInt(triggerRect.top) + (offset.y||0) + triggerRect.height;
            style.left = Common.parseInt(triggerRect.right)+ (offset.x||0);
        }else if(placement === 'rightbottom'){
            style.top = Common.parseInt(triggerRect.top) + (offset.y||0);
            style.left = Common.parseInt(triggerRect.right)+ (offset.x||0);
        }else if(placement === 'bottomleft'){
            style.top = Common.parseInt(triggerRect.bottom)+ (offset.x||0);
            style.left = Common.parseInt(triggerRect.right)+ (offset.x||0);
            if(this.props.initOverLayerWidth){
                style.width = triggerRect.width;
            }
        }else if(placement === 'bottomright'){
            style.top = Common.parseInt(triggerRect.bottom)+ (offset.y||0);
            style.left = Common.parseInt(triggerRect.left)+ (offset.x||0);
            if(this.props.initOverLayerWidth){
                style.width = triggerRect.width;
            }
        }else if(placement === 'leftbottom'){
            style.top = Common.parseInt(triggerRect.top) + (offset.y||0);
            style.left = Common.parseInt(triggerRect.left)+ (offset.x||0);
        }else if(placement ==='lefttop'){
            style.top = Common.parseInt(triggerRect.top) + (offset.y||0) + triggerRect.height;
            style.left = Common.parseInt(triggerRect.left)+ (offset.x||0);
        }
        return style;
    }
    getPopPositionStyle(){
        let placement = this.props.placement || 'bottom';
        var triggerRect = this.getBoundingClientRect();
        if(this.state.show==='preshow'){
            return {
                visibility:false,
                placement,
                style:{},
                triggerRect
            };
        }
        const offset = this.props.offset || {};
        const popLayerRect = this.popLayer.getBoundingClientRect();
        const bodyHeight = document.body.offsetHeight;
        const bodyWidth = document.body.offsetWidth;
        if(bodyHeight - triggerRect.bottom < 100){
            placement = 'top';
        }
        return {
            placement,
            style:this.getStyleByPlacement(placement,triggerRect),
            triggerRect,
            visibility:true
        };
    }
    onMouseLeave(){
        this.props.popview.onMouseLeave();
    }
    
    render(){
        const pos = this.getPopPositionStyle();
        const className = [`xz-popview-content-${this.positionMode}`];
        if(this.props.popWrapperClassName){
            className.push(this.props.popWrapperClassName);
        }
        const innerP = {};
        if(this.state.show ==='preshow'){
            className.push('xz-popview-hide');
        }else{
            if(this.state.show){
                innerP.className = `xz-pop-animate-${pos.placement}`;
            }else{
                innerP.className = `xz-pop-animate-${pos.placement}-hide`;
            }
            className.push(`xz-popview-trans-${pos.placement}`);
        }

        return <div
            ref={(popLayer)=>{
                this.popLayer = popLayer;
            }}
            onWheel={(e)=>{ e.preventDefault(); }}
            onMouseOver={()=>{
                this.props.popview.clearShowTimeout();
                if(this.props.parentPopview){
                    this.props.parentPopview.clearShowTimeout();
                }
            }}
            onMouseLeave={this.onMouseLeave.bind(this)} className={className.join(' ')} style={pos.style}>
                <div {...innerP}>{this.props.renderContent({
                    ...{instance:this.props.popview},
                    ...pos
                })}</div>
        </div>;
    }
}



export default PopView;
