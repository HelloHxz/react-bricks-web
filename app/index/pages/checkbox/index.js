import {React,PageView,observer,PageContainer,Row,CheckBox,Button} from "bricks-web"

@PageView()
class CheckBoxDemo extends React.PureComponent {

  componentDidMount() {
  }

  constructor(props){
    super(props);
    this.state = {
      disabled:false,
      cValue:true,
      cValue2:'indeterminate'
    }
  }

  onCheckBoxChange(value,params){
    this.setState({
      cValue:value
    });
  }
  onCheckBoxChange2(value,params){
    this.setState({
      cValue2:value
    });
  }
  render() {
    return <div>
           <CheckBox disabled={this.state.disabled}  />
           <CheckBox disabled={this.state.disabled} onChange={this.onCheckBoxChange.bind(this)} value={this.state.cValue} />
           <CheckBox disabled={this.state.disabled} />
           <CheckBox disabled={this.state.disabled} onChange={this.onCheckBoxChange2.bind(this)} value={this.state.cValue2} />
           <Button onClick={()=>{
             this.setState({
               disabled:!this.state.disabled
             });
           }}>toggle enable</Button>
    </div>
  }
}

export default CheckBoxDemo;