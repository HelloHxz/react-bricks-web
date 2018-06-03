
const sourceMap = {
    'btn-type':['default','primary'],
    'size':['default','sm','lg']
};

class Theme {
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
}



export default Theme;