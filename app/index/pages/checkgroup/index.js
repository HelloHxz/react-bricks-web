import {React,PageView,observer,PageContainer,Row,CheckGroup,Button} from "bricks-web"

@PageView()
class CheckGroupDemo extends React.PureComponent {

  componentDidMount() {
  }

  constructor(props){
    super(props);
    this.state = {
        value:['0','10']
    }
  }

  onChange(value,params){
      this.setState({value});
  }
  render() {
    return <div>
           <CheckGroup onChange={this.onChange.bind(this)} value={this.state.value} data={[
               {label:"check1",value:'0'},
               {label:"check2",value:'10'},
               {label:"check2",value:'01'},
               {label:"check3",value:'110'},
           ]}/>
           <Button onClick={()=>{
               alert(JSON.stringify(this.state.value));
           }}>
               getData
           </Button>
    </div>
  }
}

export default CheckGroupDemo;