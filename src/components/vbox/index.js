import React from 'react';
import './index.less';

const positions =['top','middle','bottom'];

const statusArr = ['popshow','pophide','dock','slideshow','slidehide'];
export default class VBox extends React.Component{
    constructor(props){
        super(props);
        this.layoutInfo = {};
    }
    render(){
        if(!this.props.children){
            return null;
        }
        const len = this.props.children.length;
        let seed = 0;
        const children = [];
        for(let i = 0 ;i<len;i+=1){
            const panel = this.props.children[i];
            if(panel.type === Panel){
                const position = positions[seed];
                let status = null;
                if(position==='top'||position==='bottom'){
                    status = panel.props.status||'dock';
                    if(statusArr.indexOf(status)<0){
                        status = 'dock';
                    }
                }

                children.push(React.cloneElement(panel,{
                    position,
                    key:position,
                    parent:this,
                }));
                const propsStyle = panel.props.style || {};
                this.layoutInfo[position] = {
                    height:propsStyle.height,
                    status
                };
                if(children.length===3){
                    break;
                }
                seed+=1;
            }
        }
        if(children.length<=1||children.length>3){
            console.error("Vbox组件保证有俩个或者三个VBox.Panel子元素");
        }
        const vboxStyle = Object.assign({},this.props.style||{});
        delete vboxStyle["position"];
        return (
            <div 
                style={vboxStyle}
                ref={(root)=>{
                this.root = root;
                if(root){
                    this.layoutInfo.height = this.root.offsetHeight;
                }
            }} className="xz-vbox">
                {children}
            </div>
        );
    }
}

class Panel extends React.Component {
    getHeight = (position,parent) => {
        if(!parent.layoutInfo[position].height){
            parent.layoutInfo[position].height = 60;
        }
        return parent.layoutInfo[position].height;
    }
    getStatus = (position,parent) => {
        return parent.layoutInfo[position].status;
    }
    getStyle = ()=>{
        const cloneStyle = Object.assign({},this.props.style||{});
        const { position,parent } = this.props;
        const topStatus = this.getStatus('top',parent);
        const bottomStatus = this.getStatus('bottom',parent);
        const topHeight = this.getHeight('top',parent);
        const bottomHeight = this.getHeight('bottom',parent);
        delete cloneStyle['position'];
        delete cloneStyle['bottom'];
        delete cloneStyle['height'];
        delete cloneStyle['width'];
        delete cloneStyle['top'];
        if(position==='top'){
            if(topStatus==='slidehide'){
                cloneStyle.top = (0 - parseInt(topHeight));
            }else{
                cloneStyle.top = 0;
            }
            cloneStyle.height = topHeight;
        }else if(position==='middle'){
            if(topStatus==='popshow'||topStatus==='pophide'||topStatus==='slidehide'){
                cloneStyle.top = 0;
            }else{
                cloneStyle.top = topHeight;
            }
            if(bottomStatus==='popshow'||bottomStatus==='pophide'||bottomStatus==='slidehide'){
                cloneStyle.bottom = 0;
            }else{
                cloneStyle.bottom = bottomHeight;
            }
           
        }else if(position==='bottom'){
            if(bottomStatus==='slidehide'){
                cloneStyle.bottom = (0 - parseInt(bottomHeight));
            }else{
                cloneStyle.bottom = 0;
            }
            cloneStyle.height = bottomHeight;
        }
        return cloneStyle;
    }
    render(){
        const { position,parent } = this.props;
        const status = this.getStatus(position,parent);
        const className = ['xz-vbox-panel',`xz-vbox-panel-${position}${status?'-'+status:''}`];
        if(position==='middle'){
            const topStatus = this.getStatus('top',parent);
            const bottomStatus = this.getStatus('bottom',parent);
            if(topStatus==='popshow'||topStatus==='pophide'||bottomStatus==='popshow'||bottomStatus==='pophide'){
                className.push('xz-vbox-transition-none');
            }
        }
        return (
             <div style={this.getStyle()} className={className.join(' ')}>{this.props.children}</div>
        )
    }
}

VBox.Panel = Panel;

