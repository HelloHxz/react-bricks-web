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
    }
    render(){
        return <div className='xz-message-wraper xz-message-wraper-show'><div className='xz-message-wraper-inner'>Message</div></div>
    }
}

export { Message };

