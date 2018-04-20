import  React from 'react';
import Common from '../../utils/common';
import './index.less';



class PopMenuRoot extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:props.data||[],
            subData:null,
        }
    }
    onMouseOver(e){
        e.stopPropagation();
        e.preventDefault();
        this._clearTime();
        this.setState({
            subData:this.state.data.children
        });
    }
    _clearTime(){
        if(this.timeoutid){
            window.clearTimeout(this.timeoutid);
            this.timeoutid = null;
        }
        if(this.props.triggerRoot){
            this.props.triggerRoot._clearTime();
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
                subData:null
            });
        },300);
        if(this.props.triggerRoot){
            this.props.triggerRoot.hidePop();
        }
    }
    render(){
        var subMenu = null;
        var p = {};
     
        var mouseEvent = {
            onMouseOver:this.onMouseOver.bind(this),
            onMouseLeave:this.onMouseLeave.bind(this)
        };
        if(this.props.className){
            p.className = this.props.className;
        }
        if(this.state.subData && this.root){
            subMenu = <Menu key="1" triggerRoot={this} isPop={true} rect={this.root.getBoundingClientRect()} data={this.state.subData} />;
        }
        return (<div {...p} ref={(root)=>{this.root = root;}} {...mouseEvent}>
                {this.props.children}
                {subMenu}
             </div>);
    }
}

class Menu extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:props.data||[],
            subData:null,
            rect:props.rect
        }
    }
    shouldComponentUpdate(nextProps,nextState){
        if(this.props.isPop){
            return JSON.stringify(this.state.data)!==JSON.stringify(nextProps.data)&&JSON.stringify(this.state.rect)!==JSON.stringify(nextProps.rect);
        } 
        return true;
    }
    onMouseOver(e){
        e.stopPropagation();
        e.preventDefault();
        if(this.props.triggerRoot){
            this.props.triggerRoot._clearTime();
        }
    }
 
    onMouseLeave(e){
       e.stopPropagation();
       e.preventDefault();
       if(this.props.triggerRoot){
           this.props.triggerRoot.hidePop();
       }
      
    }

    getPopPositionStyle(){
        var rect = this.props.rect || {top:0,left:0,width:0,height:0,offsetX:0,offsetY:0};
        return {
            top:Common.parseInt(rect.top)+Common.parseInt(rect.offsetY),
            left:Common.parseInt(rect.left)+
                Common.parseInt(rect.width)+Common.parseInt(rect.offsetX),
        };
    }

    render(){
        let children = [];
        let style={};
        let wrapperClassName = this.props.className||'';
        var mouseEvent = {};
        if(this.props.isPop){
            wrapperClassName = wrapperClassName +' xz-pop-menu';
            style=this.getPopPositionStyle();
            mouseEvent ={
                onMouseLeave:this.onMouseLeave.bind(this),
                onMouseOver:this.onMouseOver.bind(this)
            };
        }else{
            if(this.props.horizontal===true){
                wrapperClassName = wrapperClassName +' xz-min-menu-hori';
            }else{
                wrapperClassName = wrapperClassName +' xz-min-menu-veri';
            }
        }
        for(let i=0,j=this.state.data.length;i<j;i++){
            let itemData = this.state.data[i];
            if(itemData.children){
                children.push(<PopMenuRoot className='xz-mini-menu-item' triggerRoot={this.props.triggerRoot} key={i} data={itemData}><MenuSectionItem data={itemData}/></PopMenuRoot>);
            }else{
                children.push(<MenuSectionItem className='xz-mini-menu-item' key={i} data={itemData}/>);
            }
        }
       
        return (<div {...mouseEvent} className={wrapperClassName} style={style} ref={(root)=>{this.root = root;}}>
              {children}
         </div>);
      
    }
}
class MenuSection extends React.Component{
    constructor(props){
        super(props); 
        this.state={
            data:props.data
        }
    }
    render(){
        var children = [];
        return <div>
            <MenuSectionItem data={this.state.data}/>
        </div>;
    }
}

class MenuSectionItem extends React.Component{
    constructor(props){
        super(props); 
        this.state={
            data:props.data
        }
    }
    render(){
        var p = {};
        if(this.props.className){
            p.className = this.props.className;
        }
        return <div {...p}>{this.state.data.label}</div>;
    }
}


export {PopMenuRoot,Menu};
