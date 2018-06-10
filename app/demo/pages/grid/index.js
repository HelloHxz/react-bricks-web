import {React,PageView,observer,PageContainer,Row} from "react-bricks-web"

@PageView()
class GridDemo extends React.PureComponent {

  componentDidMount() {
  }

  constructor(props){
    super(props);
  }
  render() {
    return <div>
         <Row>
            <Row.Col offset={{md:2}} span={{ xs: 8, sm: 8, md: 6, lg: 6 }}>11</Row.Col>
            <Row.Col span={{ sm: 8, md: 6, lg: 6 }}>11</Row.Col>
            <Row.Col span={{ xs: 8, sm: 8}}>111</Row.Col>
          </Row>
    </div>
  }
}

export default GridDemo;