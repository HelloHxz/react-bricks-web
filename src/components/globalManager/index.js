class manager{
    constructor(){
        document.body.onmousewheel = function(event) {
            console.log("1");
            console.log(event.target.getBoundingClientRect().top+event.target.getBoundingClientRect().height);	
        };
        document.body.addEventListener("DOMMouseScroll", function(event) {
            console.log("2");
            console.log(event.target.getBoundingClientRect());	
        });
    }

}

export default new manager();