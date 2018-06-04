import {React,PageView,observer,PageContainer,Modal,Button,Select,Tooltip} from "react-bricks"

@PageView()
class ToolTipDemo extends React.PureComponent {

  componentDidMount() {
  }

  constructor(props){
    super(props);
    this.state={
        visible:false
    }
  }

  render() {
    return <div>
       <Tooltip><Button>show</Button></Tooltip>
    </div>
  }
}

export default ToolTipDemo;