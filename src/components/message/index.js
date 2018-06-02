import React from 'react';
import xz from '../xz';
import './index.less';

export default class MessageApi{
    static show(content,timeout){
        return xz.showMessage(content,timeout);
    }

    static hide(key){
        if(!key){
            return ;
        }
        xz.hideMessage(key);
    }
}


class Message extends React.Component {
    constructor(props){
        super(props);
        this.state={
            show:true
        }
    }
    componentDidMount(){
        if(this.props.timeout === 0){
            return;
        }
        let timeout = 3000;
        if(!isNaN(this.props.timeout)){
            timeout = parseInt(this.props.timeout);
        }
        setTimeout(()=>{
            this.hide();
        },timeout);
    }
    hide = ()=>{
        this.setState({show:false},()=>{
            setTimeout(()=>{
                this.props.parent.hideMessage(this.props.messageKey);
            },310);
        });
    }
    render(){
        return <div className={`xz-message-wraper xz-message-wraper-${this.state.show?'show':'hide'}`}><div className='xz-message-wraper-inner'>{this.props.content}</div></div>
    }
}

export { Message };

