import React from 'react';
import './icomoon/style.css';
import './index.less';

export default class Icon extends React.Component{
    render(){
        const outP = {
            className:["xz-icon-wrapper"]
        };
        const {textPlacement,text,className,style} = this.props;

        if(className){
            outP.className.push(className);
        }
        if(style){
            outP.style = style;
        }
        
        const children = [];
        if(this.props.type){
            children.push(<i key='icon' className={`xz-icon xz-icon-${this.props.type}`}/>);
        }else if(this.props.customIcon){
            children.push(<i key='icon' className={`${this.props.customIcon}`}/>);
        }
        if(text){
            outP.className.push(`xz-icon-text-${textPlacement||'right'}`);
            if(typeof(text)==='function'){
                children.push(text());
            }else{
                children.push(<span key='text' className='xz-icon-text'>{text}</span>);
            }
            if(textPlacement==='left' || textPlacement==='top'){
                children.reverse();
            }
        }else{
        }

       
        outP.className = outP.className.join(" ");
        return <div {...outP}>{children}</div>
    }
}