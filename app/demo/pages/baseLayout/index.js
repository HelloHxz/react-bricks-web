import {React,PageView,observer,PageContainer} from "react-bricks"

class BaseLayout extends React.Component {

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