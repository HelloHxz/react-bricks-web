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
            tmmess:[],
            tlmes:[],
            blmes:[],
            Modals:[],
        };
    }
    showMessage(params){
        this.seed += 1;
        const messageKey = `message${this.seed}`;
        this.componentDict[messageKey] = { instance: <Message key={messageKey}/>, pos:'tmmess'};
        this.state['tmmess'].push(messageKey);
        this.setState({
            tmmess:this.state.tmmess
        });
    }
    hideMessage(messageKey){
        delete this.componentDict[messageKey];
    }
    render(){
        const messageArr = ['tmmess'];
        const Re = [];
        for(let i = 0,j = messageArr.length;i<j;i+=1){
            const mesWrapperKey=  messageArr[i];
            const _child = this.state[mesWrapperKey];
            if(_child.length>0){
                const messages = [];
                for(let n = 0,m = _child.length;n<m;n+=1){
                    const messageKey = _child[n];
                    const messageInstance = this.componentDict[messageKey].instance;
                    messages.push(messageInstance);
                }
                Re.push(<div key={mesWrapperKey} className={`xz-mes-wraper-${mesWrapperKey}`}>{messages}</div>);
            }
        }
        return (<React.Fragment>
            {Re}
            </React.Fragment>);
    }
}