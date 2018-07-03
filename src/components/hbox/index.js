import React from 'react';
import BackLayer from '../backLayer';
import './index.less';

const statusArr = ['popshow','pophide','dock','slideshow','slidehide'];

export default class VBox extends React.Component{
    constructor(props){
        super(props);
        this.boxType = props.boxType || 'hbox';
        this.layoutInfo = {};
        this.sizeMark = 'width';
    }
    onBackLayerClick(){
        this.props.onBackLayerClick();
    }
    render(){
        if(!this.props.children){
            return null;
        }
        const len = this.props.children.length;
        let seed = 0;
        const children = [];
        let showBk = false;
        for(let i = 0 ;i<len;i+=1){
            const panel = this.props.children[i];
            if(panel.type === Panel){
                const positions = this.boxType==='hbox'?['left','middle','right']:[this.firstBoxMark,'middle',this.lastBoxMark];
                const position = positions[seed];
                let status = null;
                if(position===this.firstBoxMark||position===this.lastBoxMark||position==='left'||position==='right'){
                    status = panel.props.status||'dock';
                    if(statusArr.indexOf(status)<0){
                        status = 'dock';
                    }
                }
                if(panel.props.status==='popshow'){
                    showBk = true;
                }
                children.push(React.cloneElement(panel,{
                    position,
                    key:position,
                    parent:this,
                    boxType:this.boxType,
                    sizeMark:this.sizeMark
                }));
                const propsStyle = panel.props.style || {};
                this.layoutInfo[position] = {
                    status
                };
                this.layoutInfo[position][this.sizeMark] = propsStyle[this.sizeMark];
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
        const backlayerProps = {};
        if(this.props.onBackLayerClick){
            backlayerProps.onClick = this.onBackLayerClick.bind(this);
        }
        return (
            <div 
                style={vboxStyle}
                ref={(root)=>{
                this.root = root;
            }} className={`xz-${this.boxType} ${this.props.className||''}`}>
                {children}
                <BackLayer {...backlayerProps} className={`xz-${this.boxType}-bk`} show={showBk} /> 
            </div>
        );
    }
}

class Panel extends React.Component {
    constructor(props){
        super(props);
        this.boxType = this.props.boxType;
        this.firstBoxMark = 'left';
        this.lastBoxMark = 'right';
      
        this.sizeMark = this.props.sizeMark;
    }
    getSize = (position,parent) => {
        if(!parent.layoutInfo[position]){
            return 0;
        }
        if(!parent.layoutInfo[position][this.sizeMark]){
            parent.layoutInfo[position][this.sizeMark] = 60;
        }
        return parent.layoutInfo[position][this.sizeMark];
    }
    getStatus = (position,parent) => {
        if(!parent.layoutInfo[position]){
            return null;
        }
        return parent.layoutInfo[position].status;
    }
    getStyle = ()=>{
        const cloneStyle = Object.assign({},this.props.style||{});
        const { position,parent } = this.props;
        const firstBoxStatus = this.getStatus(this.firstBoxMark,parent);
        const lastBoxStatus = this.getStatus(this.lastBoxMark,parent);
        const firstBoxSize = this.getSize(this.firstBoxMark,parent);
        const lastBoxSize = this.getSize(this.lastBoxMark,parent);
        delete cloneStyle['position'];
        delete cloneStyle[this.lastBoxMark];
        delete cloneStyle['height'];
        delete cloneStyle['width'];
        delete cloneStyle[this.firstBoxMark];
        if(position===this.firstBoxMark){
            if(firstBoxStatus==='slidehide'){
                cloneStyle[this.firstBoxMark] = (0 - parseInt(firstBoxSize));
            }else{
                cloneStyle[this.firstBoxMark] = 0;
            }
            cloneStyle[this.sizeMark] = firstBoxSize;
        }else if(position==='middle'){
            if(firstBoxStatus==='popshow'||firstBoxStatus==='pophide'||firstBoxStatus==='slidehide'){
                cloneStyle[this.firstBoxMark] = 0;
            }else{
                cloneStyle[this.firstBoxMark] = firstBoxSize;
            }
            if(lastBoxStatus==='popshow'||lastBoxStatus==='pophide'||lastBoxStatus==='slidehide'){
                cloneStyle[this.lastBoxMark] = 0;
            }else{
                cloneStyle[this.lastBoxMark] = lastBoxSize;
            }
           
        }else if(position===this.lastBoxMark){
            if(lastBoxStatus==='slidehide'){
                cloneStyle[this.lastBoxMark] = (0 - parseInt(lastBoxSize));
            }else{
                cloneStyle[this.lastBoxMark] = 0;
            }
            cloneStyle[this.sizeMark] = lastBoxSize;
        }
        return cloneStyle;
    }
    render(){
        const { position,parent } = this.props;
        const status = this.getStatus(position,parent);
        const className = [`xz-${this.boxType}-panel`,`xz-${this.boxType}-panel-${position}${status?'-'+status:''}`];
        if(position==='middle'){
            const firstBoxStatus = this.getStatus(this.firstBoxMark,parent);
            const lastBoxStatus = this.getStatus(this.lastBoxMark,parent);
            if(firstBoxStatus==='popshow'||firstBoxStatus==='pophide'){
                className.push(`xz-${this.boxType}-transition-top-none`);
            } 
            if(lastBoxStatus==='popshow'||lastBoxStatus==='pophide'){
                className.push(`xz-${this.boxType}-transition-bottom-none`);
            }
        }
        if(this.props.className){
            className.push(this.props.className);
        }
        return (
             <div style={this.getStyle()} className={className.join(' ')}>
                <div style={{position:'relative',width:'100%',height:'100%'}}>
                  {this.props.children}
                </div>
             </div>
        )
    }
}

VBox.Panel = Panel;

