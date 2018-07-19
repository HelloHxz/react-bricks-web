import {React,PageView,observer,PageContainer,Modal,Button,Select,Swiper} from "react-bricks-web"

var siwperData = [
    {src:"",title:"xxxx",style:{backgroundColor:'red',height:'100%'},autoHeight:100},
    {
      src:"",title:"xx1x",style:{backgroundColor:'yellow',height:'100%'},autoHeight:200
     },
     {src:"",title:"xxx13",style:{backgroundColor:'gray',height:'100%'},autoHeight:150},
     {src:"s",title:"huhuhuhuhuhuhuhs",style:{backgroundColor:'yellow',height:'100%'},autoHeight:'auto'},
     {src:"huhuhuhuhuhuhuhs",title:"xxxx,,,.,.,",style:{backgroundColor:'green',height:'100%'},autoHeight:'auto'}
   ];


@PageView()
class SwiperDemo extends React.PureComponent {

  componentDidMount() {
  }

  constructor(props){
    super(props);
    this.state={
        visible:false
    }
  }

  renderSwiperItem=(params)=>{
    return ( <div style={params.data.style}>{params.data.title}</div>);
  }

  renderSwiperHeightAutoItem=(params)=>{
    return ( <div style={{
      ...params.data.style,
      ...{height:params.data.autoHeight}
    }}><div>{params.data.title}</div></div>);
  }

  render() {
    return <div>
      Swipers
      <Swiper ref={(instance)=>{this.topswiper = instance;}} 
            style={{height:250}}
            lazyrender={false} 
            direction={'horizontal'}
            interval={5000} 
            loop={true}
            cache={true} 
            data={siwperData} 
            renderItem = {this.renderSwiperItem.bind(this)}>
          </Swiper>

          <div style={{height:50}}>
          <Swiper ref={(instance)=>{this.topswiper = instance;}} 
            style={{height:'100%'}}
            lazyrender={false} 
            direction={'vertical'}
            interval={4000} 
            loop={true}
            cache={true} 
            data={siwperData} 
            renderItem = {this.renderSwiperItem.bind(this)}>
          </Swiper>

          </div>
        
        </div>
  }
}
export default SwiperDemo;