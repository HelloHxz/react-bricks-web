import {React,PageView,observer,PageContainer,XZ,Button,Spin} from "react-bricks-web"



@PageView()
class SpinDemo extends React.PureComponent {

  componentDidMount() {
  }

  constructor(props){
    super(props);
  }

  render() {
    return <div>
      <Spin/>
    </div>
  }
}

export default SpinDemo;