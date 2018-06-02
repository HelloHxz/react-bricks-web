import React from 'react';
import xz from '../../xz';
import { Message } from '../../message';



export default class ExtendWrapper extends React.Component{
    constructor(props){
        super(props);
        this.seed = 0;
        xz._setExtendWrapperInstance(this);
        this.componentDict = {};
        this.state = {
            messages:[],
            Modals:[],
        };
    }
    showMessage(params){
        this.seed += 1;
        const messageKey = `message${this.seed}`;
        this.componentDict[messageKey] = <Message params={params} parent={this} messageKey={messageKey} key={messageKey}/>;
        this.state.messages.push(messageKey);
        this.setState({
            messages:this.state.messages
        });
    }
    destoryMessage(messageKey){
        delete this.componentDict[messageKey];
        for(let i = this.state.messages.length;i>=0;i-=1){
            if(this.state.messages[i] === messageKey){
                this.state.messages.splice(i,1);
                break;
            }
        }
        this.setState({
            messages:this.state.messages
        });
    }
    render(){
        const {messages} = this.state;
        let messageDom = null;
        if(messages.length>0){
            const messageChild = [];
            for(let n = 0,m = messages.length;n<m;n+=1){
                const messageKey = messages[n];
                const messageInstance = this.componentDict[messageKey];
                if(messageInstance){
                    messageChild.push(messageInstance);
                }
            }
            messageDom = <div className='xz-mes-container'>{messageChild}</div>
        }
        return (<React.Fragment>
            {messageDom}
            </React.Fragment>);
    }
}