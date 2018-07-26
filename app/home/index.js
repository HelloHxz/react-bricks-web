import 'babel-polyfill'
import {HashNavigate,Dynamic,HistoryNavigate} from "react-bricks-web";
import React from 'react';
import './index.less';

var config = {
	root:"home",
	ajax:{
		onResponse:()=>{

		},
		onRequest:()=>{
			
		}
	},
	urlMap:{
		components:"home"
	},
	pages:{
		home:require("./pages/home").default,
	},
	onPageRender(params){
		// if(params.pageKey!=='/'&&params.pageKey!=='home'){
		// 	//BasicStore.MenuData params.pageKey
		// 	return <div>你没有权限看</div>;
		// }
	}
};
export default HashNavigate(config)