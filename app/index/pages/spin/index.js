import {React,PageView,observer,PageContainer,XZ,Button,Spin} from "bricks-web";
import './index.less';



@PageView()
class SpinDemo extends React.PureComponent {

  componentDidMount() {
  }

  constructor(props){
    super(props);
  }

  render() {
    return <div>
      <Spin speed='fast'/>
      <Spin/>
      <Spin speed='slow'/>

      
      <Spin speed='slow'>
        <div>asdasdasdasdasdasdasdasdasdasd</div>
      </Spin>
    </div>
  }
}

export default SpinDemo;