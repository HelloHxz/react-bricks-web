import Global from '../../utils/global';

class XZ {
    constructor(){
        this._navigator = null;
        this._extendWrapperInstancer = null;
        this._seed = 0;
        this.OS = null;
    }

    isMac = ()=>{
        if(!this.OS){
            this.OS = this._getOS();
        }
        return this.OS === 'mac';
    }

    _getOS = ()=> {
        if(navigator.userAgent.indexOf("Window")>0){
            return "windows";
        }else if(navigator.userAgent.indexOf("Mac OS X")>0) {
            return "mac";
        }else if(navigator.userAgent.indexOf("Linux")>0) {
            return "linux";
        }else{
            return "unknown";
        }
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