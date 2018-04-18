class manager{
    constructor(){
        document.body.onmousewheel = function(event) {
            console.log("1");
            console.log(event.target.getBoundingClientRect().top+event.target.getBoundingClientRect().height);	
            event.stopPropagation();
        };
        document.body.addEventListener("DOMMouseScroll", function(event) {
            console.log("2");
            console.log(event.target.getBoundingClientRect());	
            event.stopPropagation();
        });
    }

}

export default new manager();