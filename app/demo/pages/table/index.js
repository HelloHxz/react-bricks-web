import {React,PageView,observer,PageContainer,Modal,Button,Select,Table} from "react-bricks-web"

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
          width: 100,
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
      title: 'Company Address',
      dataIndex: 'companyAddress',
      key: 'companyAddress',
    }, {
      title: 'Company Name',
      dataIndex: 'companyName',
      key: 'companyName',
    }],
  }, {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
    width: 60,
  }];


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
        columns={columns}
        />
    </div>
  }
}

export default TableDemo;