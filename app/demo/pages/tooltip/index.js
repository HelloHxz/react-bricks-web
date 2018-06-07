import {React,PageView,observer,PageContainer,Modal,Button,Select,Tooltip} from "react-bricks"

@PageView()
class ToolTipDemo extends React.PureComponent {

  componentDidMount() {
  }

  constructor(props){
    super(props);
    this.state={
        visible:false
    }
  }

  render() {
    return <div>
       <Tooltip placement='topleft'><Button>TopLeft</Button></Tooltip>
       <Tooltip positionMode='fixed' placement='top'><Button>Top</Button></Tooltip>
       <Tooltip placement='topright'><Button>TopRight</Button></Tooltip>
       <Tooltip placement='righttop'><Button>RightTop</Button></Tooltip>
       <Tooltip placement='right'><Button>Right</Button></Tooltip>
       <Tooltip placement='rightbottom'><Button>RightBottom</Button></Tooltip>
       <Tooltip placement='bottomright'><Button>BottomRight</Button></Tooltip>
       <Tooltip placement='bottom'><Button>Bottom</Button></Tooltip>
       <Tooltip placement='bottomleft'><Button>BottomLeft</Button></Tooltip>
       <Tooltip placement='leftbottom'><Button>LeftBottom</Button></Tooltip>
       <Tooltip placement='left'><Button>Left</Button></Tooltip>
       <Tooltip placement='lefttop'><Button>LeftTop</Button></Tooltip>
    </div>
  }
}

export default ToolTipDemo;