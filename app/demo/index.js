import {Run,Dynamic} from "react-bricks"

var config = {
	root:"home",
	baseLayout:require("./pages/baseLayout").default,
	pages:{
		home:require("./pages/home").default,
		button:require("./pages/button").default,
		grid:require("./pages/grid").default,
		modal:require("./pages/modal").default,
		form:require("./pages/form").default,
		popview:require("./pages/popview").default,
		select:require("./pages/select").default,
		input:Dynamic(()=>import(/* webpackChunkName: "inputpage" */ "./pages/input")),
	},
};
export default Run(config)