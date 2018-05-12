import {Run} from "react-bricks"
import './grid.less';

var config = {
	root:"home",
	devConfig:{
		development:{
			server:"http://localhost:8000"
		},
		uat:{
			
		},
		production:{

		}
	},
	pages:{
		home:require("./pages/home").default,
		button:require("./pages/button").default,
	},
};
export default Run(config)