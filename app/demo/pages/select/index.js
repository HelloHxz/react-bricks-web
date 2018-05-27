import {React,PageView,observer,PageContainer,Modal,Button,Select} from "react-bricks"

@PageView
class SelectDemo extends React.PureComponent {

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
       <Select />
    </div>
  }
}

export default SelectDemo;