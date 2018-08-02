
import XZ from '../xz';
import Themes from './extendTheme';

const sourceMap = {
    'btn-type':['default','primary','primarytext','text'],
    'size':['default','sm','lg']
};

let translateKeys = null;
class Theme {
    static setTheme(name){
        const ComInstance = null;
        if(!Themes[name]){
            return;
        }
        XZ._setTheme(ComInstance,()=>{
            // set html classname
        })
    }
    static getConfig = (key,props)=>{
        let rkey = key;
        const source = sourceMap[key];
        const rkeyArr = rkey.split('-');
        if(rkeyArr.length===2){
            rkey = rkeyArr[1];
        }
        const value = props[rkey]||'';
        if(source.indexOf(value)<0){
            return source[0];
        }
        return value;
    }
    static getTransitionKeys () {
        if (translateKeys) {
            return translateKeys;
        }
        var testStyle = document.createElement("DIV").style;
        var me = {};
        if ("-webkit-transform" in testStyle) {
            me.transitionend = "webkitTransitionEnd";
            me.transform = "WebkitTransform";
            me.cssTransform = "-webkit-transform";
            me.transition = "WebkitTransition";
        }
        else if ("-ms-transform" in testStyle) {
            me.transitionend = "msTransitionEnd";
            me.transform = "msTransform";
            me.cssTransform = "-ms-transform";
            me.transition = "msTransition";
        } else {
            me.transitionend = "transitionend";
            me.transform = "transform";
            me.cssTransform = "transform";
            me.transition = "transition";
        }
        translateKeys = me;
        return me;
    }
}



export default Theme;