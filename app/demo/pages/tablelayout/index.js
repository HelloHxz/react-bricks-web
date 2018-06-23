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
        <TableLayout>
            <TableLayout.Cell style={{width:150}}>width:150px</TableLayout.Cell>
            <TableLayout.Cell>auto</TableLayout.Cell>
            <TableLayout.Cell style={{width:100}}>width:100px</TableLayout.Cell>
            <TableLayout.Cell style={{width:70}}>width:70px</TableLayout.Cell>
        </TableLayout>
        <br/>
        <TableLayout>
            <TableLayout.Cell style={{width:150}}>width:150px</TableLayout.Cell>
            <TableLayout.Cell>auto</TableLayout.Cell>
            <TableLayout.Cell>auto</TableLayout.Cell>
            <TableLayout.Cell style={{width:70}}>width:70px</TableLayout.Cell>
        </TableLayout>
    </div>
  }
}

export default TableLayoutDemo;