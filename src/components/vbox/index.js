import React from 'react';
import './index.less';

const positions =['top','middle','bottom'];
export default class VBox extends React.Component{
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
                children.push(React.cloneElement(panel,{
                    position:positions[seed],
                    key:positions[seed],
                }));
                if(children.length===3){
                    break;
                }
                seed+=1;
            }
        }
        if(children.length<=1||children.length>3){
            console.error("Vbox组件保证有俩个或者三个VBox.Panel子元素");
        }
        return (
            <div className="xz-vbox">
                {children}
            </div>
        );
    }
}


class Panel extends React.Component {
    render(){
        return (
             <div className='xz-vbox-panel'>{this.props.children}</div>
        )
    }
}

VBox.Panel = Panel;

