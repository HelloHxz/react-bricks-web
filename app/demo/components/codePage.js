import {React,PageView,observer,PageContainer,XZ,Button,Icon,Tabs} from "react-bricks-web"
import MD from './md';
import CodeList from './codeList';

export default class BottomDemo extends React.PureComponent {
  
  renderItem(key){
    if(key==='code'){
      return this.renderCode();
    }else if(key==='knowdge'){
      return <div style={{padding:10}}><MD source={this.props.knowledgeText} /></div>
    }
    return <div>{key}</div>
  }
  
  renderCode() {
    const arr = this.props.mdText.split('-分割线-');
    return <div style={{overflowX:'hidden',padding:10}}>
        <MD source={arr[0]} />
        <CodeList data={this.props.getCodeListData()}/>
        <MD source={arr[1]} />
    </div>
  }

  render(){
      return <Tabs style={
          { height:'100%'}
      } renderItem={this.renderItem.bind(this)} 
        size='lg' 
        tabStyle={{
          textAlign:'center',
          borderBottom:'1px solid #eee'
        }}
        defaultSelectedKey='code'
        data={[
            {label:"代码示例",key:'code'},
            {label:"知识点讲解",key:'knowdge'},
    ]} />;
  }
}
