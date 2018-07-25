import {React,PageView,observer,PageContainer,Modal,Button,Select,Popover} from "react-bricks-web"

@PageView()
class PopoverDemo extends React.PureComponent {

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
       <Popover show={true}><Button>show</Button></Popover>
    </div>
  }
}

export default PopoverDemo;