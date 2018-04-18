import {Run} from "react-bricks"

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
		home:require("./main/pages/home").default,
		buttonDemo:require("./main/pages/buttonDemo").default,
		nest:require("./main/pages/nest").default,
	},
};
export default Run(config)