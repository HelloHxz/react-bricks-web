import {React,PageView,observer,PageContainer,Row,Radio} from "react-bricks-web"

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