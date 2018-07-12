import {React,PageView,observer,PageContainer,Input} from "react-bricks-web"

@PageView()
class InputDemo extends React.PureComponent {

  componentDidMount() {
  }

  constructor(props){
    super(props);
  }

  goBack(){
    this.props.navigation.goBack();
  }


  onPageBeforeLeave(params){
    if(params.action==="后退"){
      return true;
    }
  }


  render() {
    return <div style={{overflow:'auto',height:'100%',padding:10}}>
        <div style={{maxWidth:600}}>
           <Input label='姓名1' />
           <br/>
           <Input label='姓名' size='sm' />
           <br/>
           <Input label='姓名' size='lg' />
           <br/>
           <div>tableLayout</div>
           <Input tableLayout={{
             label:{
               style:{
                 width:100
               }
             }
           }} label='姓名' size='lg' />
           <br/>
           <Input tableLayout={{
             label:{
               width:100
             }
           }} label='姓名' />
           <br/>
           <Input tableLayout={{
             label:{
               width:100
             }
           }} label='姓名' size='sm' />
           <br/>
           <div>gridLayout</div>
           <Input gridLayout={
             {
               label:{
                 span:6
               },
               input:{
                 span:18
               }
             }
           } label='姓名' size='lg' />
            <br/>
           <Input gridLayout={
             {
              
             }
           } label='姓名' />
            <br/>
           <Input gridLayout={
             {
               label:{
                 span:6
               },
               input:{
                 span:18
               }
             }
           } label='姓名' size='sm' />
        </div>
        
    </div>
  }
}

export default InputDemo;