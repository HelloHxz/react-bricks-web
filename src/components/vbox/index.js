import React from 'react';
import './index.less';

const positions =['top','middle','bottom'];
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
                children.push(React.cloneElement(panel,{
                    position,
                    key:position,
                    parent:this,
                }));
                const propsStyle = panel.props.style || {};
                this.layoutInfo[position] = {
                    height:propsStyle.height
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
    getStyle = ()=>{
        const cloneStyle = Object.assign({},this.props.style||{});
        const { position,parent } = this.props;
        delete cloneStyle['position'];
        delete cloneStyle['bottom'];
        delete cloneStyle['height'];
        delete cloneStyle['width'];
        delete cloneStyle['top'];
        if(position==='top'){
            cloneStyle.top = 0;
            cloneStyle.height = this.getHeight('top',parent);
        }else if(position==='middle'){
            cloneStyle.top = this.getHeight('top',parent);
            cloneStyle.bottom = this.getHeight('bottom',parent);
        }else if(position==='bottom'){
            cloneStyle.height = this.getHeight('bottom',parent);
            cloneStyle.bottom = 0;
        }
        return cloneStyle;
    }
    render(){
        return (
             <div style={this.getStyle()} className='xz-vbox-panel'>{this.props.children}</div>
        )
    }
}

VBox.Panel = Panel;

