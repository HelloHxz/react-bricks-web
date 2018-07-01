import React from 'react';
import BackLayer from '../backLayer';
import './index.less';

export default class Modal extends React.Component{
    constructor(props){
        super(props);
        this.isInit = true;
        this.state = {
            visible:props.visible
        }
    }

    static show(content){
        alert("showhahahhah");
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.visible!==this.state.visible){
            this.setState({
                visible:nextProps.visible
            },()=>{
                if(!this.state.visible){
                    this.destory();
                }
            });
        }
    }

    destory(){
        setTimeout(()=>{
            this.isInit = true;
            this.setState({
                visible:false
            });
        },300);
    }
    hide(){

    }
    render(){
        if(!this.state.visible&&this.isInit){
            return null;
        }
        this.isInit = false;
        const subfix = this.state.visible?'show':'hide';
        const wrapperClassName = ['xz-modal-wrapper',`xz-modal-wrapper-${subfix}`];
        return (<React.Fragment>
            <div className={wrapperClassName.join(' ')}>
                <div className='xz-modal'>{
                    this.props.children
                }</div>
            </div>
            <BackLayer show={this.state.visible} className='xz-modal-bk' positionMode='fixed'/>
        </React.Fragment>)
    }
}