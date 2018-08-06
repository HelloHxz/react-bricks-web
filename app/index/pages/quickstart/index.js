import {React,PageView,observer,PageContainer,XZ,Button,Icon} from "bricks-web";
import MD from '../../components/md';
import MDText from './index.md';

@PageView()
class Example extends React.PureComponent {

  constructor(props){
    super(props);
  }

  render() {
    return <div className='doc-md-page'>
        <MD source={MDText} />
    </div>
  }
}

export default Example;