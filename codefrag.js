if(!ref){return;}
ref.onmousewheel = function(event) {
  event.stopPropagation();
  event.preventDefault();
  if(event.wheelDelta<0){
    ref.scrollTop = ref.scrollTop + 40;
  }else{
    ref.scrollTop = ref.scrollTop - 40;
  }
};
ref.addEventListener("DOMMouseScroll", function(event) {
event.stopPropagation();
event.preventDefault();
  if(event.detail>0){
    ref.scrollTop = ref.scrollTop + 40;
  }else{
    ref.scrollTop = ref.scrollTop - 40;
  }
});