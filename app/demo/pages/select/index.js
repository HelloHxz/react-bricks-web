import {React,PageView,observer,PageContainer,Modal,Button,Select} from "react-bricks-web"

@PageView()
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
       <Select style={{width:300}} dropdownStyle={{width:350}}/>
       <Select />
    </div>
  }
}

export default SelectDemo;