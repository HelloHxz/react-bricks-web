import {React,PageView,observer,PageContainer,XZ,Button,Icon} from "bricks-web"



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
      <br/>
      <br/>
      <Icon type='questioncircleo' text='图标'/>

      <br/>
      <br/>
      <Icon type='questioncircleo'/>

      <br/>
      <br/>
      <Icon customIcon='iconfont icon-desktop'/>
      <br/>
      <br/>
      <Icon customIcon='iconfont icon-desktop' text='自定义'/>
      <br/>
      <br/>
      <Icon customIcon='iconfont icon-desktop' textPlacement='left' text='自定义'/>

    </div>
  }
}

export default IconDemo;