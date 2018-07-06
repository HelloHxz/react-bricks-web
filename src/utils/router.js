
import Global from './global';

class Router {
    constructor(){
      this.navigateInstance = null;
    }

    setNavigateInstance(navigate){
        this.navigateInstance = navigate;
    }

    go = (path,params)=>{
    }

    getUrlInfo(){
        return this.navigateInstance.getUrlInfo();
    }
    listenerHashChangeEvent = (cb) => {
        return Global.addEvent('hashchange',cb);
    }
    removeHashChangeListener = (id) => {
        Global.removeEvent('hashchange',id);
    }
}

export default new Router();