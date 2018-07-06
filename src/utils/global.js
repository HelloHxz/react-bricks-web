class manager{
    constructor(){
        this.seed = 1;
        this.resizeEvent={};
        this.hashChangeEvent = {};
        // document.body.onmousewheel = function(event) {
        //     // console.log("1");
        //     // console.log(event.target.getBoundingClientRect().top+event.target.getBoundingClientRect().height);	
        //     event.stopPropagation();
        // };
        // document.body.addEventListener("DOMMouseScroll", function(event) {
        //     // console.log("2");
        //     // console.log(event.target.getBoundingClientRect());	
        //     event.stopPropagation();
        // });
        var resizeTimeoutID = null;
        window.onresize = () => {
            if(resizeTimeoutID){
                window.clearTimeout(resizeTimeoutID);
                resizeTimeoutID = null;
            }
            resizeTimeoutID = setTimeout(()=>{
                for(var key in this.resizeEvent){
                    try{
                        this.resizeEvent[key]();
                    }catch(e){
                        delete this.resizeEvent[key];
                    }
                }
            },200);
        }
    }

    _triggerHashChange(params){
        for(var key in this.hashChangeEvent){
            try{
                this.hashChangeEvent[key](params);
            }catch(e){
                delete this.hashChangeEvent[key];
            }
        }
    }

    addEvent = (type,func) => {
        this.seed += 1;
        const eventId = `${type}_${this.seed}`;
        if(type==='resize'){
            this.resizeEvent[eventId] = func;
        }else if(type==='hashchange'){
            this.hashChangeEvent[eventId] = func;
        }
        return eventId;
    }
    removeEvent = (type,eventid) => {
        if(type==='resize'){
            delete this.resizeEvent[eventid];
        }else if(type==='hashchange'){
            delete this.hashChangeEvent[eventid];
        }
    }

}

export default new manager();