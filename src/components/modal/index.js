import React from 'react';
import BackLayer from '../backLayer';
import './index.less';

export default class Modal extends React.Component{
    constructor(props){
        super(props);
        this.isInit = true;
        this.state = {
            show:props.show
        }
    }

    static show(content){
        alert("showhahahhah");
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.show!==this.state.show){
            this.setState({
                show:nextProps.show
            },()=>{
                if(!this.state.show){
                    this.destory();
                }
            });
        }
    }

    destory(){
        setTimeout(()=>{
            this.isInit = true;
            this.setState({
                show:false
            });
        },300);
    }
    hide(){

    }
    render(){
        if(!this.state.show&&this.isInit){
            return null;
        }
        this.isInit = false;
        const subfix = this.state.show?'show':'hide';
        const wrapperClassName = ['xz-modal-wrapper',`xz-modal-wrapper-${subfix}`];
        return (<React.Fragment>
            <div className={wrapperClassName.join(' ')}>
                <div className='xz-modal'>{
                    this.props.children
                }</div>
            </div>
            <BackLayer show={this.state.show} className='xz-modal-bk' position='fixed'/>
        </React.Fragment>)
    }
}