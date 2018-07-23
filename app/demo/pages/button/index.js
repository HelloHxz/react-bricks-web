import {React,PageView,observer,PageContainer,XZ,Button,Icon,Tabs} from "react-bricks-web"
import MD from '../../components/md';
import CodeList from '../../components/codeList';
import mdtext from './index.md';

@PageView()
class BottomDemo extends React.PureComponent {
  
  constructor(props){
    super(props);
  }
  getCodeListData() {
    const docList = require.context('./doc', true, /index\.js$/).keys();
    const Re = [];
    for(var i=0,j=docList.length;i<j;i+=1){
      const codePath = docList[i];
      let commonPath = (codePath.split("index.js")[0]);
      commonPath = commonPath.substring(2,commonPath.length);
      Re.push({
        JSCode:require('!raw-loader!./doc/'+commonPath+'index.js'),
        LessCode:require('!raw-loader!./doc/'+commonPath+'index.less'),
        CodeComponent:require('./doc/'+commonPath+'index.js').default,
        MDStr:require('./doc/'+commonPath+'index.md')
      });
    }
    return Re;
  }

  goBack(){
    this.props.navigation.goBack();
  }


  onPageBeforeLeave(params){
    if(params.action==="后退"){
      return true;
    }
  }

  renderItem(key){
    if(key==='code'){
      return this.renderCode();
    }
    return <div>{key}</div>
  }
  
  renderCode() {
    return <div>
        <MD source={mdtext} />
        <CodeList data={this.getCodeListData()}/>
    </div>
  }

  render(){
      return <Tabs style={
          { height:'100%'}
      } renderItem={this.renderItem.bind(this)} 
        size='lg' 
        tabStyle={{
          textAlign:'center',
          borderBottom:'1px solid #ccc'
        }}
        defaultSelectedKey='code'
        data={[
            {label:"代码示例",key:'code'},
            {label:"知识点讲解",key:'knowdge'},
    ]} />;
  }
}

export default BottomDemo;