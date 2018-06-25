import {React,PageView,observer,PageContainer,XZ,Button,Icon} from "react-bricks-web"



@PageView()
class IconDemo extends React.PureComponent {

  componentDidMount() {
  }

  constructor(props){
    super(props);
  }

  render() {
    return <div>
      <Icon/>
    </div>
  }
}

export default IconDemo;