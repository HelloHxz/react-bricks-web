import {React,PageView,observer,PageContainer,Row,Radio} from "bricks-web";
import './index.less';

@PageView()
class RadioDemo extends React.PureComponent {

  componentDidMount() {
  }

  constructor(props){
    super(props);
  }
  render() {
    return <div>
           <Radio />
           <Radio value={true} />
    </div>
  }
}

export default RadioDemo;