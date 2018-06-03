import React from 'react';
import PopView from '../popview';
import Theme from '../theme';
import './index.less';

export default class Select extends React.Component{
    renderPopView(){
        return <div>Selector</div>;
    }
    onChange(){

    }
    render(){
        return (<React.Fragment>
            <PopView 
                mode='click' 
                mouseLeaveHide={true} 
                renderContent={this.renderPopView.bind(this)}>
                <div className={`xz-select xz-select-size-${Theme.getConfig('size',this.props)}`}>
                    <span className='placeholder'>{this.props.placeholder}</span>
                </div>
            </PopView></React.Fragment>)
        ;
    }
}