import React from 'react';


export default class ExtendWrapper extends React.Component{
    constructor(props){
        super(props);
        window.HUXIAOZHONGEXTENDWRAPPER = this;
        this.state = {
            TopMiddleMessage:[],
            TopLeftMessage:[],
            BottomLeftMessage:[],
            Modals:[],
        };
    }
    showMessage(params){
        alert("wo Show message");
    }
    render(){
        return (<div>
            </div>);
    }
}