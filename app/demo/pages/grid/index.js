import {React,PageView,observer,PageContainer,Row} from "react-bricks-web";
import './index.less';

@PageView()
class GridDemo extends React.PureComponent {

  componentDidMount() {
  }

  constructor(props){
    super(props);
  }
  render() {
    return <div style={{height:'100%',overflow:'auto'}}>
         <Row className='demo-grid'>
            <Row.Col offset={{md:2}} span={{ xs:24, sm: 24, md: 12, lg: 8 }}><div className='demo-grid-inner'>11</div></Row.Col>
            <Row.Col span={{ sm: 24, md: 12, lg: 8 }}><div className='demo-grid-inner'>11</div></Row.Col>
            <Row.Col span={{ xs: 24, sm:24,md:12, lg: 6}}><div className='demo-grid-inner'>111</div></Row.Col>
         </Row>

         <Row className='demo-grid' gutter={16}>
         <Row.Col span={{ xs:24, sm: 24, md: 12, lg: 8 }}><div className='demo-grid-inner'>11</div></Row.Col>
            <Row.Col span={{ sm: 24, md: 12, lg: 8 }}><div className='demo-grid-inner'>11</div></Row.Col>
            <Row.Col span={{ xs: 24, sm:24,md:12, lg: 8}}><div className='demo-grid-inner'>111</div></Row.Col>
         </Row>

          <Row className='demo-grid' gutter={{lg:12,md:16,xl:24}}>
            <Row.Col span={{ xs:24, sm: 24, md: 12, lg: 8 }}><div className='demo-grid-inner'>11</div></Row.Col>
            <Row.Col span={{ sm: 24, md: 12, lg: 8 }}><div className='demo-grid-inner'>11</div></Row.Col>
            <Row.Col span={{ xs: 24, sm:24,md:12, lg: 8}}><div className='demo-grid-inner'>111</div></Row.Col>
         </Row>
    </div>
  }
}

export default GridDemo;