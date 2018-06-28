
import React from 'react';
import Icon from '../icon';
import XZ from '../xz';
import './index.less';

/*
    <Spin
     loadingContent={}
     errorContent={}
     loading={}
     error={}
    className='' style={}>
    </Spin>
*/
class Spin extends React.Component{
    render(){
        //XZ.browser.isIE9()
        if(this.props.children){
            return <div>
                <div className='xz-spin-inner'>
                    <Icon type='loading1' className={`xz-loading-icon xz-spin-${this.props.speed||'default'}`} />
                    {this.props.children}
                </div>
            </div>
        }
        return <div><Icon type='loading1' className={`xz-loading-icon xz-spin-${this.props.speed||'default'}`} /></div>
    }
}

export default Spin;
