import React from 'react';
import './index.less';


/*
    <HBox>
        <HBox.Panel status='popshow|pophide|dock|slideshow|slidehide' style={{width:100}}></HBox.Panel>
        <HBox.Panel></HBox.Panel>
        <HBox.Panel status='popshow|pophide|dock|sildeshow|slidehide' style={{width:100}}></HBox.Panel>
    </HBox>
*/

const positions =['left','middle','right'];
const statusArr = ['popshow','pophide','dock','slideshow','slidehide'];

export default class HBox extends React.Component{
    render(){
        if(!this.props.children){
            return null;
        }
        const len = this.props.children.length;
        let seed = 0;
        let children = [];
        for(let i = 0 ;i<len;i+=1){
            const panel = this.props.children[i];
            if(panel.type === Panel){
                const position = positions[seed];
                children.push(React.cloneElement(panel,{
                    position,
                    key:position,
                }));
                if(children.length===3){
                    break;
                }
                seed+=1;
            }
        }
        if(children.length<=1||children.length>3){
            console.error("HBox组件保证有俩个或者三个HBox.Panel子元素");
        }
        if(children.length === 3){
            children = [children[0],children[2],children[1]];
        }
        const hboxStyle = Object.assign({},this.props.style||{});
        delete hboxStyle["position"];
        return (
            <div style={hboxStyle} className="xz-hbox">
                {children}
            </div>
        );
    }
}

class Panel extends React.Component {
    render(){
        const p = {};
        if(this.props.style){
            p.style = this.props.style;
        }
        let status = null;
        if(this.props.position==='left'||this.props.position==='right'){
            status = this.props.status||'dock';
            if(statusArr.indexOf(status)<0){
                status = 'dock';
            }
        }
        return (
             <div {...p} className={`xz-hbox-panel xz-hbox-panel-${this.props.position}${status?'-'+status:''}`}>{this.props.children}</div>
        )
    }
}

HBox.Panel = Panel;

