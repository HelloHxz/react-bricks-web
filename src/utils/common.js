export default {
    parseInt:function(v){
        if(!v){
            return 0;
        }
        if(isNaN(v)){
            return 0;
        }
        return window.parseInt(v);
    }
}

