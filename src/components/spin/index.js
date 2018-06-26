
import React from 'react';
import Icon from '../icon';
import './index.less';

/*
    <LoadingWarpper
     loadingContent={}
     errorContent={}
     content={}
    className='' style={}>
    </LoadingWrapper>
*/
class Spin extends React.Component{
    render(){
        if(this.props.children){

        }
        return <div><Icon type='loading1' className={`xz-loading-icon xz-spin-${this.props.speed||'default'}`} /></div>
    }
}

export default Spin;
