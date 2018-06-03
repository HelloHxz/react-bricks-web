import ReactDOM from 'react-dom';
import React from 'react';
import global from '../../utils/global';
import "./web/index.less"
import Navigation from './web'
import XZ from '../xz';


export default (config)=>{
	for(var key in config.pages){
		var pageClass = config.pages[key];
		if(pageClass.__role!=='pageview'){
			if(pageClass.type==='dynamic'){
				continue;
			}
			console.error("页面"+key+"没有使用@PageView装饰器进行声明装饰");
			return;
		}
		pageClass.__pagename = key;
	}
	ReactDOM.render(
		<Navigation ref={(instance) => {
			XZ._setNavigator(instance);
		}} config={config}/>,
		document.getElementById('xz-lightapp-root'));
}