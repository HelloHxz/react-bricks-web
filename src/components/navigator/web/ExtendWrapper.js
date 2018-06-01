import React from 'react';
import xz from '../../xz';


export default class ExtendWrapper extends React.Component{
    constructor(props){
        super(props);
        xz._setExtendWrapperInstance(this);
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