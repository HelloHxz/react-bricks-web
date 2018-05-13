import {Run,Dynamic} from "react-bricks"
import './grid.less';

var config = {
	root:"home",
	pages:{
		home:require("./pages/home").default,
		button:require("./pages/button").default,
		input:Dynamic(()=>import(/* webpackChunkName: "inputpage" */ "./pages/input")),
	},
};
export default Run(config)