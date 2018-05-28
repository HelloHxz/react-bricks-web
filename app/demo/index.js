import {Run,Dynamic} from "react-bricks"

var config = {
	root:"home",
	pages:{
		"/":require("./pages/basicLayout").default,
		home:require("./pages/home").default,
		button:require("./pages/button").default,
		grid:require("./pages/grid").default,
		modal:require("./pages/modal").default,
		message:require("./pages/message").default,
		form:require("./pages/form").default,
		popview:require("./pages/popview").default,
		select:require("./pages/select").default,
		input:Dynamic(()=>import(/* webpackChunkName: "inputpage" */ "./pages/input")),
	},
};
export default Run(config)