import React from 'react';
import './index.less';

const positions =['left','middle','right'];
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
            console.error("Vbox组件保证有俩个或者三个HBox.Panel子元素");
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
        return (
             <div className={`xz-hbox-panel xz-hbox-panel-${this.props.position}`}>{this.props.children}</div>
        )
    }
}

HBox.Panel = Panel;

