import React from 'react';
import xz from '../xz';
import './index.less';

export default class MessageApi{
    static show(params){
        xz.showMessage(params);
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
        setTimeout(()=>{
            this.setState({show:false},()=>{
                setTimeout(()=>{
                    this.props.parent.destoryMessage(this.props.messageKey);
                },3000);
            });
        },3000);
    }
    render(){
        return <div className={`xz-message-wraper xz-message-wraper-${this.state.show?'show':'hide'}`}><div className='xz-message-wraper-inner'>Message</div></div>
    }
}

export { Message };

