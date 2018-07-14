import React from 'react';
import Theme from '../theme';
import './index.less';

export default class Group extends React.Component{
    render(){
        return (<span className='xz-group'>{this.props.children}</span>)
    }
}