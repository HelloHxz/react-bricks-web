import {React,PageView,observer,PageContainer} from "bricks-web"
import BaseStore from './store';

@PageView({baseStore:BaseStore})
class BasicLayout extends React.PureComponent {

  constructor(props){
    super(props);
    this.state={
      loading: false
    } ;
  }

  onRouterChange(params){
    if(params.path === 'login') {
      return;
    }
    /*
      伪代码
      if(没有用户信息)){
        getUserInfo().then((()=>{
          // 获取到了info 正常显示
          // else 没有获取到 跳到登录页
        })).catch(()=>{
          // 跳到登录页
        });
      }
    */
    if(!this.props.baseStore.UserInfo){
      this.setState({
        loading:true
      });
      setTimeout(()=>{
        this.props.baseStore.UserInfo = { "name": 'hxz' };
        this.setState({
          loading:false
        });
      },1000);
    }
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

export default BasicLayout;