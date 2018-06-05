class manager{
    constructor(){
        this.seed = 1;
        this.resizeEvent={};
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

                    }
                }
            },600);
        }
    }

    addEvent = (type,func) => {
        this.seed += 1;
        const eventId = `${type}_${this.seed}`;
        if(type==='resize'){
            this.resizeEvent[eventId] = func;
        }
        return eventId;
    }
    removeEvent = (type,eventid) => {
        if(type==='resize'){
            delete this.resizeEvent[eventid];
        }
    }

}

export default new manager();