import {React,PageView,observer,PageContainer} from "react-bricks"

class BaseLayout extends React.PureComponent {

  constructor(props){
    super(props);
    this.state={
      loading:true
    } ;
  }

  componentDidMount() {
    setTimeout(()=>{
      this.setState({
        loading:false
      });
    },1000);
  }

 
  render() {
    if(this.state.loading){
      return <div>欢迎来到React-Brick,正在初始化数据中 ...</div>;
    }
    return <React.Fragment>
        {this.props.children}
    </React.Fragment>
  }
}

export default BaseLayout;