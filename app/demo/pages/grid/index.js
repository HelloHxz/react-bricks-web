import {React,PageView,observer,PageContainer,Row,Col} from "react-bricks"

@PageView
class GridDemo extends React.Component {

  componentDidMount() {
  }

  constructor(props){
    super(props);
  }
  render() {
    return <div>
         <Row>
            <Col offset={{md:2}} span={{ xs: 8, sm: 8, md: 6, lg: 6 }}>11</Col>
            <Col span={{ sm: 8, md: 6, lg: 6 }}>11</Col>
            <Col span={{ xs: 8, sm: 8}}>111</Col>
          </Row>
    </div>
  }
}

export default GridDemo;