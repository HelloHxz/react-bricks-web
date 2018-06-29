import React from "react";
import PageView from "./pageview"


class LazyPageView extends React.Component {
  constructor(props) {
    super(props)
    this.type="LazyPageView"

    this.state={innerChild:null};
    this.load();
  }





  load(){
    var pagename = this.props.pagename||"";
    var realpagename = pagename.split("_")[0];
    var Fuc = this.props.navigation.props.config.pages[realpagename].pagePromise;
    Fuc().then((Com)=>{
      this.props.navigation.props.config.pages[realpagename] = Com.default;
      this.setState({innerChild:<PageView lazyowner = {this} {...this.props}/>});
    }).catch(()=>{

    });
  
  }

  render() {
    return this.state.innerChild;
  }
}
export default LazyPageView;
