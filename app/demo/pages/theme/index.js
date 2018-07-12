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
      通过 import()语法异步引入一个组件实现，组件引用主题样式，
      并在加载完成的时候，将HTML的样式名称修成成为对应的样式名称
      <div/>
      思路可以定义不同的全局的个性化变量less文件，然后使用脚本在这个less文件后面追加各个组件的less引用，或者直接写死，然后使用动态组件去引用less
      <div/>
      或者看看能不能使用require.context去动态引入less
      <div/>
      可以充分使用less变量的可覆盖特性，比如新建一个文件先引入默认样式变量文件，然后再引入自定义的变量进行覆盖
      <div/>
      组件的样式可以拆分成不变的部分和主题部分 这样就可以减少css体积
    </div>
  }
}

export default ThemeDemo;