import React from "react";

class PageView extends React.Component {
  constructor(props) {
    super(props)
    this.shouldUpdate = true;
    this.curShowPageInfo = null;
    this.basePage = null;
    this.bkCover = null;
    this.store = null;
    this.showPageDict = {};
    this.state={
      leftroute:props.leftroute,
      pagename:props.pagename,
      isDestory:false
    };

    if(props.lazyowner){
      props.lazyowner.realPage = this;
    }
  }


  componentWillReceiveProps(props){
    this.setState({pagename:props.pagename,leftroute:props.leftroute});
  }

  resume(){
    if(!this.state.isDestory){
      return;
    }
    this.setState({isDestory:false});
  }



  destroy(){
    this.setState({isDestory:true});
  }

  componentWillUnmount(){
    console.log(this.props.pkey+"     unmount>>>");
    this.props.navigation.pageUnmount(this);
  }

  componentDidMount(){
    console.log(this.props.pkey+"     didmount>>>");
  }

   componentWillUpdate(nextProps,nextState){
    return false;
  }

  refresh(){
    
  }


  render() {
    console.log("render>>>>"+this.props.pkey);
    if(this.state.isDestory){
      return null;
    }
    var pagename = this.state.pagename||"";
    var realpagename = pagename.split("_")[0];
    var ToPageClass = this.props.navigation.props.config.pages[realpagename];
    var params = {
      url:this.props.navigation.getUrlInfo(),
      pagemanager:this.props.pagemanager,
      base:this,
      pagename:realpagename,
      key:this.props.pkey
    };

    if(!this.store){
      if(ToPageClass.connectStore){
        this.store = ToPageClass.connectStore(params);
      }
    }
    var basePageClassName = "xz-page-base-page ";
  
    return (
          <ToPageClass 
            base={this} 
            {...this.store}
            ref={(instance)=>{
               this.pageInstance = instance;
            }}
            owner = {this.props.owner}
            urlinfo={this.props.navigation.getUrlInfo()}
            pagename={this.state.pagename}
            leftroute = {this.state.leftroute}
            navigation={this.props.navigation}
            basekey={this.props.pkey}
            pkey={this.props.pkey+"_inner"} 
            key={this.props.pkey+"_inner"}>
          </ToPageClass>);
  }
}
export default PageView;
