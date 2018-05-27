import {React,PageView,observer,PageContainer} from "react-bricks"

class BaseLayout extends React.PureComponent {

  componentDidMount() {
  }

  constructor(props){
    super(props);
  }

  render() {
    return <div>
        {this.props.children}
    </div>
  }
}

export default BaseLayout;