import React from "react";
import PageView from "./pageview";
import LazyLoadPage from "./lazyLoadPage";
import ExtendsWrapper from './ExtendWrapper';



/*
  路由需要支持：
    1. 多级路由
    2. 参数传递
    3. modifyparams deleteparams addparams 修改参数 页面不刷新
    4. 阻止后退 可以使用自身的UI进行阻止（刚进来的第一页也可以阻止）
    5. 默认的是keepAlive 可设置不保留 前一个页面的状态和dom
*/
var isWantToPreventRoute = false,isReplaceGo=false,splitchar='_',systemseedname='_hxz';

class Navigation extends React.Component {
  constructor(props) {

    super(props)
    this.appConfig = props.config;
    this.routeStack = [];
    this.isForward = false;
    //浏览器并不会为第一个url记录hash记录 所以想禁止第一个页面离开 需要在第一次加载根路径的时候增加一个hash记录
    this.firstLoadToChangeHash = false;
    this.isInit = true;
    this.hashEvents ={};
    if(!this.props.config.root){
      console.error("没有指定root页面");
    }
    this.pageInstanceDict={};
    this.state={
        curpagename:this.props.config.root,
        renderseed:0,
        isDestory:false
        ,pages:[]}  

  }


 




  componentDidMount(){
    var _this = this;
    window.onhashchange=function(){
      _this.hashChange();
    };
    this.start();
  }

  goBack() {
        this.isForward = false;
        window.history.go(-1);
  }
 

  start() {
    let config = this.props.config;
    
    var toPage = this.getPageNameFromUrl();
    this.hashChange();
  }



  prepareGo(pageKey, params,isNotForward,_isReplaceGo){
    
    if(isNotForward!==true){
      this.isForward = true;
    }
    params = params || {};
    var preUrlParams = this.getParamsFromUrl();
    var prePageName = this.getPageNameFromUrl();
    prePageName = prePageName.split("/").shift();
    var toPageName = pageKey.split("/").shift();
  
    if((_isReplaceGo&&this.prePathArr.length===0)){
       //避免本不应该发生hashchange 被__r引发hashchange
       // 当是replace的时候也走这里 但是当前页面是多级的就不走了
    }else{
      var paramsIsNotSame = false;
      if(prePageName===toPageName){
        if(this.prePathArr.length===0){
          for(var key in params){
            var curkeyValue = (params[key]||"").toString();
            var prekeyValue = (preUrlParams[key]||"").toString();
            if(key!==systemseedname&& curkeyValue!==prekeyValue){
              paramsIsNotSame = true;
              break;
            }
          }
        }else{
          paramsIsNotSame = false;
        }
        
      }else{
        paramsIsNotSame = true;
      }
      if(!paramsIsNotSame){
      }else{
      }

    }
    
    var paramsArr = [];
    for (var key in params) {
        paramsArr.push(key + "=" + params[key]);
    }
    return paramsArr;
  }

  navigate(pageKey, params,isNotForward) {
    if(pageKey[0]==="/"){
      pageKey = pageKey.substring(1);
    }
    var paramsArr = this.prepareGo(pageKey, params,isNotForward);
    if (paramsArr.length > 0) {
        location.hash = pageKey + "?" + paramsArr.join("&");
    } else {
        location.hash = pageKey;
    }

    //当没有出发hashchange的时候
    setTimeout(()=>{
      this.isForward = false;
    },200);

  }


  replace(pageKey, params) {
    if(pageKey[0]==="/"){
      pageKey = pageKey.substring(1);
    }
    isReplaceGo = true;
    var paramsArr = this.prepareGo(pageKey, params,false,true);
    this.isForward = true;
    if (paramsArr.length > 0) {
        location.replace(location.href.split("#")[0] + '#' + pageKey + "?" +  paramsArr.join("&"));
    } else {
        location.replace(location.href.split("#")[0] + '#' + pageKey);
    }

    //当没有出发hashchange的时候
    setTimeout(()=>{
      this.isForward = false;
    },200);
  }

  modifyParams(params){
    isWantToPreventRoute = true;
    var curParams = this.getParamsFromUrl();
    params = params||{};
    for(var key in params){
      curParams[key] = params[key];
    }
    var pagename = this.getPageNameFromUrl();
    this.replaceGo(pagename,curParams);
  }


  getPageNameFromUrl() {
    var nameArr = window.location.hash.split("#");
    // if (nameArr.length != 2) {
    //     return this.rootPageKey;
    // }
    var s = nameArr[1];
    if(!s){
      return this.props.config.root;
    }
    var sArr = s.split("?");
    return sArr[0]||"";
  }

  getParamsStrFromUrl() {
    var Arr = window.location.href.split("?");
    var str = Arr[Arr.length - 1];
    if (!str) {
        return null;
    }
    var str_arr = str.split("#");
    return str_arr[0];
  }

  getParamsFromUrl() {
    var paraStr = this.getParamsStrFromUrl();
    if (!paraStr) {
        return null;
    }
    var re = {};
    var paramsArr = paraStr.split("&");
    for (var i = 0, j = paramsArr.length; i < j; i++) {
        var key_value_arr = paramsArr[i].split("=");
        if (key_value_arr.length == 2) {
            re = re || {};
            re[key_value_arr[0]] = key_value_arr[1];
        } else if (key_value_arr.length > 2) {
            var pk = key_value_arr.shift();
            re[pk] = key_value_arr.join("=");
        }
    }
    return re;
  }

  hashChange(){
    if(isWantToPreventRoute){
      isWantToPreventRoute = false;
      this.firstLoadToChangeHash = false;
      return;
    }
    var curParams = this.getParamsFromUrl();
    var ToPagePath = this.getPageNameFromUrl()||this.props.config.root;
    var ToPageNameArr = ToPagePath.split("/");
    var ToPageName = ToPageNameArr.shift();
    this.prePathArr = this.prePathArr||[];

    if(ToPageName===""){
      ToPageName = ToPageNameArr.shift();
    }
    var key = ToPageName;
    var P = PageView;
    this.setState(
      {pages:<P leftroute={ToPageNameArr} pagename={ToPageName} navigation={this} key={key} pkey={key}></P>}
    );
  }


  pageUnmount(pageInstance){
    //页面销毁的时候清除相关资源
    if(pageInstance.props.navigation.pageInstanceDict[pageInstance.props.pkey]){
      delete pageInstance.props.navigation.pageInstanceDict[pageInstance.props.pkey];
    }

    if(this.hashEvents[pageInstance.props.pkey]){
      delete this.hashEvents[pageInstance.props.pkey];
    }
  }

  listenRouteChange(pageInstance,callBack){
    if(!pageInstance.props.basekey){
       console.error("listenRouteChange 第一个参数必须为页面实例对象");
    }
    if(this.hashEvents[pageInstance.props.basekey]){
      console.error("同一个页面请勿重复注册listenRouteChange！");
    }
    this.hashEvents[pageInstance.props.basekey] = {method:callBack,precalltime:new Date().valueOf()};
    callBack(this.getUrlInfo());
  }

  

 


  refreshApp(){
    this.routeStack = [];
    this.setState({isDestory:true},()=>{
      this.hashChange();
    });
    // this.hashChange();
  }

  render() {
    const pages = (<React.Fragment>
      {this.state.pages}
       <ExtendsWrapper />
      </React.Fragment>);
    if(this.props.config.pages["/"]){
      const Wrapper = this.props.config.pages["/"];
      return <Wrapper  pagename={'/'}
          navigation={this}>
        {pages}
      </Wrapper>
    }
    return pages;
  }


  getUrlInfo(){
    var path = this.getPageNameFromUrl();
    return {
      path:path,
      pathArr:path.split("/"),
      tabPath:path.split("/").splice(0,2).join("/"),
      params:this.getParamsFromUrl()
    };
  }
}
export default Navigation;
