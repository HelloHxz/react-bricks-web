import {Run,Dynamic} from "react-bricks";
import React from 'react';
import BasicStore from './pages/basicLayout/store';
import './icon/index.css';

var config = {
	root:"home",
	pages:{
		"/":require("./pages/basicLayout").default,
		home:require("./pages/home").default,
		button:require("./pages/button").default,
		grid:require("./pages/grid").default,
		modal:require("./pages/modal").default,
		tooltip:require("./pages/tooltip").default,
		popover:require("./pages/popover").default,
		message:require("./pages/message").default,
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
export default Run(config)