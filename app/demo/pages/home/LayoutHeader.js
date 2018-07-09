import {React,observer,TableLayout,Button,Tooltip} from "react-bricks-web"

@observer
class LayoutHeader extends React.Component {
  testButtonClick = ()=>{
    this.props.parent.go();
  }

  render() {
    return (
        <TableLayout style={{height:'100%'}}>
            <TableLayout.Cell>
                  <Button onClick={this.testButtonClick.bind(this)}>Go</Button>
            </TableLayout.Cell>
            <TableLayout.Cell>1</TableLayout.Cell>
            <TableLayout.Cell style={{width:250}}>
                <Tooltip positionMode='absolute' placement='bottom'><Button>Bottom</Button></Tooltip>
            </TableLayout.Cell>
        </TableLayout>
    );
  }
}

export default LayoutHeader;