import {React,PageView,observer,PageContainer,Modal,Button,Select,Tooltip} from "react-bricks-web"

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
       <Tooltip title='topleft' placement='topleft'><Button>TopLeft</Button></Tooltip>
       <Tooltip title='fixed' positionMode='fixed' placement='top'><Button>Top</Button></Tooltip>
       <Tooltip title='topright' placement='topright'><Button>TopRight</Button></Tooltip>
       <Tooltip title='righttop' placement='righttop'><Button>RightTop</Button></Tooltip>
       <Tooltip title='right' placement='right'><Button>Right</Button></Tooltip>
       <Tooltip title='rightbottom' placement='rightbottom'><Button>RightBottom</Button></Tooltip>
       <Tooltip title='bottomright' placement='bottomright'><Button>BottomRight</Button></Tooltip>
       <Tooltip title='bottom' placement='bottom'><Button>Bottom</Button></Tooltip>
       <Tooltip title='bottomleft' placement='bottomleft'><Button>BottomLeft</Button></Tooltip>
       <Tooltip title='leftbottom' placement='leftbottom'><Button>LeftBottom</Button></Tooltip>
       <Tooltip title='left' placement='left'><Button>Left</Button></Tooltip>
       <Tooltip title='lefttop' placement='lefttop'><Button>LeftTop</Button></Tooltip>

       <div style={{marginTop:20}}>
        <Tooltip title='topleft' positionMode='absolute' placement='topleft'><Button>TopLeft</Button></Tooltip>
        <Tooltip title='top' positionMode='absolute' placement='top'><Button>Top</Button></Tooltip>
        <Tooltip title='topright' positionMode='absolute' placement='topright'><Button>TopRight</Button></Tooltip>
        <Tooltip title='righttop' positionMode='absolute' placement='righttop'><Button>RightTop</Button></Tooltip>
        <Tooltip title='right' positionMode='absolute' placement='right'><Button>Right</Button></Tooltip>
        <Tooltip title='rightbottom' positionMode='absolute' placement='rightbottom'><Button>RightBottom</Button></Tooltip>
        <Tooltip title='bottomright' positionMode='absolute' placement='bottomright'><Button>BottomRight</Button></Tooltip>
        <Tooltip title='bottom' positionMode='absolute' placement='bottom'><Button>Bottom</Button></Tooltip>
        <Tooltip title='bottomleft' positionMode='absolute' placement='bottomleft'><Button>BottomLeft</Button></Tooltip>
        <Tooltip title='leftbottom' positionMode='absolute' placement='leftbottom'><Button>LeftBottom</Button></Tooltip>
        <Tooltip title='left' positionMode='absolute' placement='left'><Button>Left</Button></Tooltip>
        <Tooltip title='lefttop' positionMode='absolute' placement='lefttop'><Button>LeftTop</Button></Tooltip>
       </div>
    </div>
  }
}

export default ToolTipDemo;