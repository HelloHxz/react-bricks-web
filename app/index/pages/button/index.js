import {React,PageView} from "bricks-web"
import mdText from './index.md';
import knowledgeText from './knowledge.md';
import CodePage from '../../components/codePage';

@PageView()
class BottomDemo extends React.PureComponent {
  
  getCodeListData() {
    const docList = require.context('./doc', true, /index\.js$/).keys();
    const Re = [];
    for(var i=0,j=docList.length;i<j;i+=1){
      const codePath = docList[i];
      let commonPath = (codePath.split("index.js")[0]);
      commonPath = commonPath.substring(2,commonPath.length);
      Re.push({
        name: commonPath.substring(0,commonPath.length-1),
        JSCode:require('!raw-loader!./doc/'+commonPath+'index.js'),
        LessCode:require('!raw-loader!./doc/'+commonPath+'index.less'),
        CodeComponent:require('./doc/'+commonPath+'index.js').default,
        MDText:require('./doc/'+commonPath+'index.md')
      });
    }
    return Re;
  }

  render(){
      return <CodePage mdText={mdText} knowledgeText={knowledgeText} getCodeListData={this.getCodeListData.bind(this)} />;
  }
}

export default BottomDemo;