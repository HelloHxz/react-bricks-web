import React from "react"
import Theme from "../theme"



export default class Base extends React.Component {

  constructor(props) {
    super(props)
    this.tranDict = Theme.getTransitionKeys();
    this.space =  props.space || 0;
    this.touchoffset = this.props.touchoffset || 120;
    this.init(props,false);
    this.animate = false;
    this.state = {
      offset:0,
    };

  }

  parseSelectedInt(selectedIndex,props){
      selectedIndex = selectedIndex||0;
      selectedIndex = isNaN(selectedIndex)?0:parseInt(selectedIndex);
      selectedIndex = selectedIndex>=props.data.length?props.data.length-1:selectedIndex;
      selectedIndex = selectedIndex<0?0:selectedIndex;
      return selectedIndex;
  }

  init(props,isReciveProps){
    this.needRebind= true;
    if(isReciveProps){
      if(JSON.stringify(this.props.data)===JSON.stringify(props.data)){
        this.needRebind = false;
      }
    }
    this.isIntransition = false;

    
   

    var direction = props.direction||"horizontal";
    this.isHorizontal = direction.toLowerCase()==="horizontal";
    this.config = {
      touchkey:"pageX",
      othertouchkey:"pageY"
    };
    if(!this.isHorizontal){
      this.config = {
        touchkey:"pageY",
        othertouchkey:"pageX"
      };
    }


    if(this.isHorizontal){
      this.WrapperSizeValue = 300;
      if(this.props.itemWidth){
        this.WrapperSizeValue = parseInt(this.props.itemWidth);
      }
    }else{
      this.WrapperSizeValue = 200;
    }


    this.isLoop = props.loop;
    if(this.needRebind){
      var selectedIndex = this.parseSelectedInt(props.selectedIndex,props);

      this.wrapperArr = [2,0,1];
      this.cacheDict = {};
      this.sourceArr = [-1,selectedIndex-1,-1];
      this.getNextSourceArr();
    }else{
      //如果selectedIndex变化 则跳转props.selectedIndex
      var from = this.parseSelectedInt(this.props.selectedIndex,this.props);
      var to = this.parseSelectedInt(props.selectedIndex,props);
      if(from!==to){
        this.swipeFromTo(from,to);
      } 

    }

    var data = props.data||[];
    if(data.length>1){
      this.startInterval();
    }else{
      this.stopInterval();
    }
  }

  goNextByStep(step){
    if(this.goNextTimeoutID){
      this.goNextTimeoutID = null;
      clearTimeout(this.goNextTimeoutID);
    }
    this.animate = true;  
    this.isIntransition = true;
    
    this.setState({offset:step*(0-this.WrapperSizeValue-this.space)});
    this.goNextTimeoutID = setTimeout(()=>{
      for(var i=0;i<step;i++){
        this.getNextWraperArr();
        this.getNextSourceArr();
      }
      this.setIsInTransitionFalse();
      this.setState({offset:0});
      this.startInterval();
    },500)
  }

  goPreByStep(step){
    if(this.goPreTimeoutID){
      this.goPreTimeoutID = null;
      clearTimeout(this.goPreTimeoutID);
    }
    this.animate = true;  
    this.isIntransition = true;
    this.setState({offset:step*(this.WrapperSizeValue+this.space)});
    this.goPreTimeoutID = setTimeout(()=>{
      for(var i=0;i<step;i++){
        this.getPreWraperArr();
        this.getPreSourceArr();
      }
      this.setIsInTransitionFalse();
      this.setState({offset:0});
      this.startInterval();
    },500)
  }

  swipeFromTo(from,to){
    var diff = to-from;
    if(diff<0){
      this.goPreByStep(Math.abs(diff));
    }else{
      this.goNextByStep(Math.abs(diff));
    }
  }

  goNext(){
    this.goNextByStep(1);
  }

  goPre(){
    this.goPreByStep(1);
  }

  componentWillUnmount(){
    this.stopInterval();
    this.setState = (state,callback)=>{
          return;
    };  
  }

  stop(){
    this.stopInterval();
  }

  stopInterval(){
    if( this.goNextTimeoutID){
      this.setIsInTransitionFalse();
      this.goNextTimeoutID = null;
      clearTimeout(this.goNextTimeoutID);
    }
  	if(this.intervalID){
	    	clearInterval(this.intervalID);
	    	this.intervalID = null;
  	}
  }
  start(){
    this.startInterval();
  }
	startInterval(){
		if(!this.props.interval){
			return;
		}
		this.stopInterval();
		var interval = 0;
	    if(this.props.interval){
	    	if(isNaN(this.props.interval)){
	    		interval = 800;
	    	}else{
	    		interval = parseInt(this.props.interval);
	    	}
	    }
	    
	    if(interval>0){
	    	this.intervalID = setInterval(()=>{
	    		this.goNext();
	    	},interval)
	    }
	}

  getPreSourceArr(){
    var len = this.props.data.length;
  
    var mid = this.sourceArr[1];
    mid -= 1;
    if(mid<0){
      if(this.isLoop){
        mid =len===1?0:len-1;
      }else{
        mid +=1;
      }
    }
    var lr = this.getLeftRightIndexByMid(mid,len);
    var arr = [lr.left,mid,lr.right,lr.rightright];
    this.sourceArr = arr;
  }

  getNextSourceArr(){
    var len = this.props.data.length;
   
    var mid = this.sourceArr[1];
    mid += 1;
    if(mid>len-1){
      if(this.isLoop){
        mid =len ===0?-1:0;
      }else{
        mid -=1;
      }
    }
    var lr = this.getLeftRightIndexByMid(mid,len);
    var arr = [lr.left,mid,lr.right,lr.rightright];
    this.sourceArr = arr;
  }


  getLeftRightIndexByMid(mid,len){
    var right;
    if(mid === -1){
      right = -1;
    }else{
      right = mid + 1;
      if(right>len-1){
        if(this.isLoop){
          right = len ===1?-1:0;
        }else{
          right = -1;
        }
      }
    }

    var rightright = -1;
    if(right===-1){
      rightright = -1;
    }else{
      rightright = right + 1;
      if(rightright>len-1){
        if(this.isLoop){
          rightright = len ===1?-1:0;
        }else{
          rightright = -1;
        }
      }
    }

    var left = mid - 1;
    if(left<0){
      if(this.isLoop){
        left =len ===1?-1:len-1;
      }else{
        left = -1;
      }
    }
    return {left:left,right:right,rightright}
  }


  getNextWraperArr(){
    this.wrapperArr.push(this.wrapperArr.shift());
  }

  getPreWraperArr(){
    this.wrapperArr.unshift(this.wrapperArr.pop());
  }



onTouchStart(e){
    this.touchStartValue = e.nativeEvent.touches[0][this.config.touchkey];
    this.touchOtherStartValue =  e.nativeEvent.touches[0][this.config.othertouchkey];
    if(this.isIntransition){return;}
    this.stopInterval();
    this.starttime = new Date().valueOf();

    this.diff = 0;
    this.animate = false;  
    this.offsetValue = this.state.offset;
    this.resetPos = false;

    
  }


  onTouchMove(e){
    if(this.isIntransition){return;}
    var curTouchX = e.nativeEvent.touches[0][this.config.touchkey];
    var touchOtherValue =  e.nativeEvent.touches[0][this.config.othertouchkey];
    this.diff =  curTouchX - this.touchStartValue;
    this.otherdiff = touchOtherValue - this.touchOtherStartValue;

    if(Math.abs(this.otherdiff)-Math.abs(this.diff)>20){
      return;
    }

    this.stopPropagation(e);
  
    this.animate = false;  
    var offset = this.offsetValue;
    if(this.diff>0){
      //gopre
      if(this.sourceArr[0]===-1){
        this.diff = this.diff/3;
        this.resetPos = true;
      }
    }else{
      //gonext
      if(this.sourceArr[2]===-1){
        this.diff = this.diff/3;
        this.resetPos = true;
      }
    }

    offset = offset+this.diff;
    this.setState({offset:offset});
  }


  onTouchEnd(){

    if(this.isIntransition){return;}
    this.isIntransition = true;

    if(this.diff===0){
      this.setEnable();
      return;
    }
    if(Math.abs(this.diff)<this.touchoffset||this.resetPos){
      this.animate = true;
      
      this.setState({offset:(0-this.offsetValue)});
      this.setEnable();
      return;
    }

    if(this.diff>0){
      if(this.sourceArr[0]!==-1){
        this.goPre();
      }else{
        this.setEnable();
      }
    }else{
      if(this.sourceArr[2]!==-1){
       this.goNext();
      }else{
        this.setEnable();
      }
    }
    
  }



  setIsInTransitionFalse(){
      //  this.animate = false;
       this.isIntransition = false;
  }
  setEnable(){
      setTimeout(()=>{
        this.setIsInTransitionFalse();
        this.startInterval();
      },300);
  }



  componentWillReceiveProps(nextProps){ 
    this.init(nextProps,true);
  }


  _renderItem(params){
    var childrenItem = null;
    var index = params.index;
    var sourceIndex = this.sourceArr[index];
    if(index===0||index===2){
      //如果只有两个数据源的话 两边都一样的话 根据方向只显示一个
      if(this.sourceArr[0]===this.sourceArr[2]){
        if(this.diff>=0&&index===2){
          return null;
        }
        if(this.diff<0&&index===0){
          return null;
        }
      }
    }


    if(sourceIndex!==-1){
      childrenItem = this.cacheDict[sourceIndex.toString()];
      if((this.props.lazyrender&&index===1&&!childrenItem)||!this.props.lazyrender){
        if(!childrenItem){
          if(this.props.renderItem){
            childrenItem = this.props.renderItem({index:sourceIndex,data:this.props.data[sourceIndex]});
            if(this.props.cache){
              this.cacheDict[sourceIndex.toString()] = childrenItem;
            }
          }
        }else{

        }
      }
    }
   
    return childrenItem;
  }

  _renderIndicator(){
    var curIndex = this.sourceArr[1];
    var data  =this.props.data||[];
    var len = data.length;
    if(this.props.renderIndicator){
      return this.props.renderIndicator({
        length:len,
        curIndex:curIndex
      });
    }
 
    var point = [];
    for(var i=0;i<len;i++){
      point.push(<span className={i===curIndex?"xz-swipe-selin":"xz-swipe-in"} key={i}></span>);
    }
    return <div className="xz-swipe-default-indwrap">{point}</div>;
  }


}

