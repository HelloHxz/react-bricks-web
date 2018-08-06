import {React,PageView,observer,PageContainer,Modal,Button,Select,Table} from "bricks-web"

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 100,
  }, {
    title: 'Other',
    children: [{
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: 200,
    }, {
      title: 'Address',
      children: [{
        title: 'Street',
        dataIndex: 'street',
        key: 'street',
        width: 200,
      }, {
        title: 'Block',
        children: [{
          title: 'Building',
          dataIndex: 'building',
          key: 'building',
          width: 100,
        }, {
          title: 'Door No.',
          dataIndex: 'number',
          key: 'number',
          width: 200,
        }, {
            title: 'ex No.',
            dataIndex: 'ex',
            key: 'ex',
            width: 100,
          }],
      }],
    }],
  }, {
    title: 'Company',
    children: [{
      title: 'Address',
      dataIndex: 'companyAddress',
      key: 'companyAddress',
    }, {
      title: 'Name',
      dataIndex: 'companyName',
      key: 'companyName',
    }],
  }, {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
  }];


  const columnsTwo = [
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender1',
      width: 160,
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender2',
      width: 160,
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender3',
      width: 100,
    },
    {
      title: 'Address',
      children: [{
        title: 'Street',
        dataIndex: 'street',
        key: 'street',
        width: 230,
      }, {
        title: 'Block',
        key:'xxx'
      }],
    },
    {
      title: 'Gende1r',
      dataIndex: 'gender',
      key: 'gender4',
      width: 60,
    }
  ];


@PageView()
class TableDemo extends React.Component {

  componentDidMount() {
  }

  constructor(props){
    super(props);
    this.state={
        visible:false,
        firstTableData:[{},{},{},{},{},{},{},{},{},{},{},{},{},]
    }
  }

  changeData = ()=>{
    this.state.firstTableData.splice(0,1);
    this.setState({
      firstTableData:this.state.firstTableData
    });
  }

  render() {
    return <div>
        <Button onClick={this.changeData.bind(this)} type='primary'>Change Data</Button>
        <Table 
          // rowKey={(record,index)=>{
          //   return index;
          // }}
          fixedHeader
          style={{height:400}}
          dataSource={this.state.firstTableData}
          columns={columns}
        />
    </div>
  }
}

export default TableDemo;