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
      <Icon textPlacement='left' text='图标'/>
      <Icon text='图标'/>
    </div>
  }
}

export default IconDemo;