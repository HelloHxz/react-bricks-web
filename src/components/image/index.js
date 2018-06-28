import React from "react"
import "./index.less"

const k = ["maxHeight",'maxWidth','minHeight','minWidth'];
class ImageCom extends React.Component {
  constructor(props) {
    super(props)

    // if(props.scrollKey&&!props.pageview){
    //   console.error("Image 组件使用scrollKey去按需加载的时候 必须指定pageview={xxx} xxx指的是所在页面的页面引用");
    // }
    this.state = {
      child:null
    }
  }

  loadImage(){
    var image = new Image();
    var _this = this;
    var src =  this.props.src||this.props.defaultSrc;
    image.onload = function(){
      _this.loadSuccess(image,src);
      _this.loadDone();
    }
    image.onerror = function(){
      _this.renderDefault();
      _this.loadDone();
    }
    image.src = src;
  }

  loadDone(){
    this.hasLazyLoadDone = true;
    this.destory();
  }

  destory(){
    if(this.props.scrollKey){
    }
  }

  componentWillUnmount(){
    this.destory();
  }

  loadImageWhenInView(noInViewCallBack){
    if(this.hasLazyLoadDone){
      return;
    }
    if(!this.isInView()){
      noInViewCallBack&&noInViewCallBack();
      return;
    }
    this.loadImage();
  }

  onScrollIntoView(){
    this.loadImageWhenInView();
  }

  loadSuccess(image,src){
    var style = {};
    if(this.resizeMode==="orgin"){
    }else if(this.resizeMode==="contain"||this.resizeMode==="bl"){
     if(image.width>image.height){
        style.width = "100%";
      }else{
        style.height = "100%";
      }
    }else if(this.resizeMode==="stretch"){
      style.width = "100%";
      style.height = "100%";
    }else{
      //cover
      if(image.width>image.height){
        style.width = "100%";
      }else{
        style.height = "100%";
      }
    }
    var propsStyle = this.props.style||{};
    var exStyle = {};
    for(var key in propsStyle){
      if(k.indexOf(key)>=0){
        exStyle[key] = propsStyle[key];
      }
    }
    this.setState({
      child:<img width={style.width} height={style.height} style={{...style,...exStyle}} src={src}/>,
    });
  }


  

  renderDefault(){
    //如果有自定义的 renderError 回掉则调用 没有的话则显示默认图片
    if(this.props.onRenderDefault){
      this.setState({
        child:this.props.onRenderDefault()
      });
    }else{
      if(this.props.defaultSrc){
        this.setState({
          child:<img src={this.props.defaultSrc}/>
        });
      }
    }
  }

  isInView(){
    return true;
    // var rect =  this.wrapper.getBoundingClientRect();
    // var verInView = (rect.top>=0&&rect.top<=Style.screen.height)||(rect.bottom>=0&&rect.bottom<=Style.screen.height);
    // var horInView = (rect.left>=0&&rect.left<=Style.screen.width)||(rect.right>=0&&rect.right<=Style.screen.width);
    // if(verInView&&horInView){
    //   return true;
    // }
    // return false;
  }

  componentDidMount(){
    this.init(this.props);
  }

  init(props){
    this.resizeMode = this.props.resizeMode||"cover";
    if(props.scrollKey){

    }else{
      this.loadImage();
    }

  }

  onClick(){
    if(this.props.onClick){
      this.props.onClick();
    }
  }

  componentWillReceiveProps(nextPros){
    if(nextPros.src!==this.props.src){
      this.init(nextPros);
    }
  }

  render() {
    var classNameArr = ["xz-image"];
    if(this.props.className){
      classNameArr.push(this.props.className);
    }
    return (<div
      style={{...{alignItems:"center"},...(this.props.style||{})}}
      onClick={this.onClick.bind(this)}
      ref={(wrapper)=>{this.wrapper= wrapper;}}
     className={classNameArr.join(" ")}>{this.state.child}</div>);
  }
}

export default ImageCom;