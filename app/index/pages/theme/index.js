import {React,PageView} from "bricks-web"
import mdText from './index.md';
import knowledgeText from './knowledge.md';
import CodePage from '../../components/codePage';

@PageView()
class BottomDemo extends React.PureComponent {
  
  getCodeListData() {
    return [];
  }

  render(){
      return <CodePage mdText={mdText} knowledgeText={knowledgeText} getCodeListData={this.getCodeListData.bind(this)} />;
  }
}

export default BottomDemo;