import {Run,Dynamic} from "react-bricks"

var config = {
	root:"home",
	baseLayout:null,
	pages:{
		home:require("./pages/home").default,
		button:require("./pages/button").default,
		grid:require("./pages/grid").default,
		modal:require("./pages/modal").default,
		form:require("./pages/form").default,
		input:Dynamic(()=>import(/* webpackChunkName: "inputpage" */ "./pages/input")),
	},
};
export default Run(config)