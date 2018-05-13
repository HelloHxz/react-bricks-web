import ReactDOM from 'react-dom';
import React from 'react';
import "./web/index.less"
import Navigation from './web'


export default (config)=>{
	for(var key in config.pages){
		var pageClass = config.pages[key];
		console.log(pageClass);
		if(pageClass.__role!=='pageview'){
			if(pageClass.type==='dynamic'){
				console.log(pageClass);
				continue;
				
				// var re = pageClass();
				// if(re instanceof Promise){
				// 	// 延迟加载
				// }
			}
			console.error("页面"+key+"没有使用@PageView装饰器进行声明装饰");
			return;
		}
		pageClass.__pagename = key;
	}
	ReactDOM.render(
		<Navigation config={config}/>,
		document.getElementById('xz-lightapp-root'));
}