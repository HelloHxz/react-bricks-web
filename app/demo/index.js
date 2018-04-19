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
		buttonDemo:require("./pages/buttonDemo").default,
		nest:require("./pages/nest").default,
	},
};
export default Run(config)