import Global from '../../utils/global';
import browser from '../../utils/browser';

class XZ {
    constructor(){
        this._navigator = null;
        this._extendWrapperInstancer = null;
        this._seed = 0;
        this.appConfig = null;
        this.browser = browser;
        browser.init();
    }
    _setAppConfig = (config) =>{
        this.appConfig = config;
    }
   
    _getSystemUniqueNum = ()=>{
        this._seed+=1;
        return this._seed;
    }
    _setNavigator = (_navigator) => {
        this._navigator = _navigator;
    }
    _setExtendWrapperInstance= (_instance) => {
        this._extendWrapperInstancer = _instance;
    }
    showMessage = (content,timeout) => {
        return this._extendWrapperInstancer.showMessage(content,timeout);
    }
    
    hideMessage = (key) => {
        this._extendWrapperInstancer.hideMessage(key);
    }

    go = (path,params)=>{
    }

    listenerResizeEvent = (cb) => {
        return Global.addEvent('resize',cb);
    }
    removeResizeListener = (id) => {
        Global.removeEvent('resize',id);
    }

    // 作为事件总线 用作于组件之间的交互
    listener = (eventkey,cb) => {

    }

    removeListener = (eventkey,cb) => {

    }

}

export default new XZ();