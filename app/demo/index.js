import {Run,Dynamic} from "react-bricks"

var config = {
	root:"home",
	pages:{
		home:require("./pages/home").default,
		button:require("./pages/button").default,
		grid:require("./pages/grid").default,
		form:require("./pages/form").default,
		input:Dynamic(()=>import(/* webpackChunkName: "inputpage" */ "./pages/input")),
	},
};
export default Run(config)