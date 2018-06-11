import {React,PageView,observer,PageContainer,Modal,Button,Select,Table} from "react-bricks-web"

@PageView()
class TableDemo extends React.PureComponent {

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
        <Table 
        datasource={[]}
        columns={[
            {
                key:'name',
                render:function(){

                },
            }
        ]}
        />
    </div>
  }
}

export default TableDemo;