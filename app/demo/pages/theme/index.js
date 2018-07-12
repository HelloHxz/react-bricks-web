import {React,PageView,observer,PageContainer,XZ,Button,Spin} from "react-bricks-web";

@PageView()
class ThemeDemo extends React.PureComponent {

  componentDidMount() {
  }

  constructor(props){
    super(props);
  }

  render() {
    return <div>
      <div>编译时 主题</div>
      通过 less modifyVars 编译时候修改实现
      <br/>
      <div>运行时主题 主题</div>
      通过 import()语法异步引入一个组件实现，组件引用主题样式，并在加载完成的时候，将HTML的样式名称修成成为对应的样式名称
    </div>
  }
}

export default ThemeDemo;