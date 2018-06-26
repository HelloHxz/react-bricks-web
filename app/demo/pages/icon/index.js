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
      <Icon textPlacement='left' type='bars' text='图标'/>
      <Icon type='questioncircleo' text='图标'/>

      <Icon type='questioncircleo'/>
    </div>
  }
}

export default IconDemo;