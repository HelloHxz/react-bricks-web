import {React,PageView,observer,PageContainer,Modal,Button,message,TableLayout} from "react-bricks-web"

@PageView()
class TableLayoutDemo extends React.PureComponent {

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
        <TableLayout style={{height:100}}>
            <TableLayout.Cell style={{width:150,backgroundColor:'red'}}>width:150px</TableLayout.Cell>
            <TableLayout.Cell>auto</TableLayout.Cell>
            <TableLayout.Cell style={{width:100,backgroundColor:'yellow'}}>width:100px</TableLayout.Cell>
            <TableLayout.Cell style={{width:70,backgroundColor:'green'}}>width:70px</TableLayout.Cell>
        </TableLayout>
        <br/>
        <TableLayout>
            <TableLayout.Cell style={{width:150,backgroundColor:'red'}}>width:150px</TableLayout.Cell>
            <TableLayout.Cell>auto</TableLayout.Cell>
            <TableLayout.Cell style={{backgroundColor:'green'}}>auto</TableLayout.Cell>
            <TableLayout.Cell style={{width:70,backgroundColor:'yellow'}}>width:70px</TableLayout.Cell>
        </TableLayout>
    </div>
  }
}

export default TableLayoutDemo;