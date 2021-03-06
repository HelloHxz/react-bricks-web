import 'babel-polyfill'
import {HashNavigate,Dynamic,HistoryNavigate} from "bricks-web";
import React from 'react';
import BasicStore from './pages/basicLayout/store';
import './icon/index.css';
import './index.less';

var config = {
	root:"login",
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
		"/":require("./pages/basicLayout").default,
		login:require("./pages/login").default,
		home:require("./pages/home").default,
		about:require("./pages/about").default,
		quickstart:require("./pages/quickstart").default,
		dropdown:require("./pages/dropdown").default,
		group:require("./pages/group").default,
		globalpage:require("./pages/globalpage").default,
		drawer:require("./pages/drawer").default,
		router:require("./pages/router").default,
		mobx:require("./pages/mobx").default,
		ajax:require("./pages/ajax").default,
		button:require("./pages/button").default,
		swiper:require("./pages/swiper").default,
		theme:require("./pages/theme").default,
		vbox:require("./pages/vbox").default,
		hbox:require("./pages/hbox").default,
		tableLayout:require("./pages/tablelayout").default,
		grid:require("./pages/grid").default,
		icon:require("./pages/icon").default,
		checkgroup:require("./pages/checkgroup").default,
		spin:require("./pages/spin").default,
		image:require("./pages/image").default,
		modal:require("./pages/modal").default,
		tabs:require("./pages/tabs").default,
		tooltip:require("./pages/tooltip").default,
		table:require("./pages/table").default,
		popover:require("./pages/popover").default,
		message:require("./pages/message").default,
		checkbox:require("./pages/checkbox").default,
		radio:require("./pages/radio").default,
		form:require("./pages/form").default,
		popview:require("./pages/popview").default,
		select:require("./pages/select").default,
		input:Dynamic(()=>import(/* webpackChunkName: "inputpage" */ "./pages/input")),
	},
	onPageRender(params){
		// if(params.pageKey!=='/'&&params.pageKey!=='home'){
		// 	//BasicStore.MenuData params.pageKey
		// 	return <div>你没有权限看</div>;
		// }
	}
};
export default HashNavigate(config)