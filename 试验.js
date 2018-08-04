import 'babel-polyfill'
import {HashNavigate,Dynamic,HistoryNavigate} from "bricks-web";
import React from 'react';
import BasicStore from './pages/basicLayout/store';
import './icon/index.css';
/**
 * https://github.com/webpack/webpack/issues/4807#issuecomment-354082841
 * https://github.com/webpack/webpack/issues/7283
 */

const dynamicPageList = ['input','button','hbox','vbox'];
// 可以实现动态声明  但是不支持异步加载
const pagePathsList = require.context('./pages', true, /index\.js$/).keys();
const pages = {};
for(var i=0,j=pagePathsList.length;i<j;i+=1){
	const pagePath = pagePathsList[i];
	const pagePathArr = pagePath.split("/");
	pagePathArr.splice(0,1);
	const pageName = pagePathArr[0];
	pages[pageName] = require('./pages/'+pagePathArr.join('/')).default;
}
var config = {
	root:"home",
	ajax:{
		onResponse:()=>{

		},
		onRequest:()=>{
			
		}
	},
	pages:pages,
	onPageRender(params){
		// if(params.pageKey!=='/'&&params.pageKey!=='home'){
		// 	//BasicStore.MenuData params.pageKey
		// 	return <div>你没有权限看</div>;
		// }
	}
};
export default HashNavigate(config)