class Browser {
    static ieversion = null;
    static init(){
        Browser.getIEVersion();
        Browser.getOS();
    }
    static _getIEVersion() {
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串  
        var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器  
        var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器  
        var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
        if(isIE) {
            var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
            reIE.test(userAgent);
            var fIEVersion = parseFloat(RegExp["$1"]);
            if(fIEVersion == 7||fIEVersion == 8||fIEVersion == 9||fIEVersion == 10) {
                return fIEVersion;
            } else {
                return 6;//IE版本<=7
            }   
        } else if(isEdge) {
            return 'edge';//edge
        } else if(isIE11) {
            return 11; //IE11  
        }else{
            return -1;//不是ie浏览器
        }
    }

    static isIE9(){
        return Browser.getIEVersion()===9;
    }

    static isIE(){
        return Browser.getIEVersion()!==-1;
    }

    static getIEVersion(){
        if(!Browser.ieversion){
            Browser.ieversion = Browser._getIEVersion();
        }
        return Browser.ieversion;
    }

    static OS = null;
    static _getOS = ()=> {
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

    static isMac = ()=>{
        if(!Browser.OS){
            Browser.OS = Browser._getOS();
        }
        return Browser.OS === 'mac';
    }

    static getOS = ()=>{
        if(!Browser.OS){
            Browser.OS = Browser._getOS();
        }
        return Browser.OS;
    }

}

export default Browser;