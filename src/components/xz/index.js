class XZ {
    constructor(){
        this._navigator = null;
        this._extendWrapperInstancer = null;
    }
    _setNavigator = (_navigator) => {
        this._navigator = _navigator;
    }
    _setExtendWrapperInstance= (_instance) => {
        this._extendWrapperInstancer = _instance;
    }
    showMessage = () => {
        alert('new message');
    }

    go = (path,params)=>{
    }
}

export default new XZ();