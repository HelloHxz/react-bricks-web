import React from 'react';
import PopView from '../popview';

export default class Select extends React.Component{
    renderPopView(){
        return <div>Selector</div>;
    }
    onChange(){

    }
    render(){
        return <div>
            <PopView 
                style={{display:'inline-block'}} 
                mode='click' mouseLeaveHide={true} 
                renderContent={this.renderPopView.bind(this)}>
                <input /></PopView>
        </div>;
    }
}