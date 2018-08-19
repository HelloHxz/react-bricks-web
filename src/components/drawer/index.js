import React from 'react';
import BackLayer from '../backLayer';
import './index.less';
import Theme from '../theme';

export default class Drawer extends React.Component{
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
        const placement = Theme.getConfig('direction',this.props);
        const position = Theme.getConfig('position',this.props);
        const wrapperClassName = [`xz-drawer-wrapper xz-drawer-wrapper-${position} xz-drawer-wrapper-${placement}`,`xz-drawer-wrapper-${placement}-${subfix}`];
        if(this.props.className){
            wrapperClassName.push(this.props.className);
        }
        return (<React.Fragment>
            <div className={wrapperClassName.join(' ')}>
                <div className='xz-drawer'>{
                    this.props.children
                }</div>
            </div>
            <BackLayer onClick={this.props.onHide} show={this.state.show} className='xz-drawer-bk' position={position}/>
        </React.Fragment>)
    }
}