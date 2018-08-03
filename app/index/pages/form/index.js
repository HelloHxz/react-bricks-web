import {React,PageView,observer,PageContainer,Row,CheckBox,Form,Input,Select,Button,CheckGroup} from "react-bricks-web"
const {FormItem,FormRepeat} = Form;

@PageView()
class FormDemo extends React.PureComponent {

  componentDidMount() {
  }

  constructor(props){
    super(props);
  }

  add(formProps){
    formProps.form.store.Lists.push({itemselectValue:"3"});
  }
  showData(formProps){
    alert(JSON.stringify(formProps.form.store));
  }
  Reset(formProps){
    formProps.form.reset();
  }

  createRow(rowProps){
    return (
      <div>
          <FormItem {...rowProps} dataKey='name' label={"姓名"} com={Input}/>
          <FormItem label='地址:' {...rowProps} dataKey='address' com={Input}/>
          <FormItem label="选择:" {...rowProps} dataKey='isChecked' initialValue={false} com={CheckBox}>
            单选框
          </FormItem>
          <FormItem 
          initialValue='2'
          label='地区:'
          rule={[
            {message:'必填!',regex:'required'},
            {message:'小于10',regex:(val)=>{
              if(val>10){
                return false;
              }
              return true;
            }}
          ]} {...rowProps} dataKey='itemselectValue' data={[{label:"江西",value:'1'},{label:"湖南",value:'2'},{label:"湖北",value:'3'}]} placeholder='请选择' com={Select}  />
      </div>
    )
  }

  render() {
    return <div className='doc-page-content'>
          <Form initialValue={{
            inputValue:'hahha'
          }} renderContent={(formProps)=>{
              return (
                <React.Fragment>
                   <Row gutter={16}>
                    <Row.Col span={{ md: 12, lg: 8 }}>
                      <FormItem label='文本输入：' {...formProps} rule={[]} dataKey='inputValue' placeholder='请输入' com={Input}  />
                    </Row.Col>
                    <Row.Col span={{md: 12, lg: 8 }}>
                     <FormItem label='文本输入：' {...formProps} rule={[]} initialValue='200' dataKey='inputValue1' com={Input}  />
                    </Row.Col>
                    <Row.Col span={{md: 12, lg: 8 }}>
                     <FormItem label='日期:' {...formProps} rule={[]} initialValue='112' dataKey='inputdate' com={Input}  />
                    </Row.Col>
                    <Row.Col span={{ md: 12, lg: 8}}>
                        <FormItem label='多选:' {...formProps} rule={[]} initialValue={[0]} data={[
                        {label:'check1',value:0},
                        {label:'check2',value:1},
                        {label:'check3',value:2},
                        {label:'check4',value:3},
                        {label:'check5',value:4},
                        {label:'check6',value:5},
                        {label:'check7',value:6},
                        {label:'check8',value:7}
                      ]} dataKey='checkgroup' com={CheckGroup}  />
                    </Row.Col>
                  </Row>
                
                  <FormItem 
                    initialValue='2'
                    rule={[
                      {message:'必填!',regex:'required'},
                      {message:'小于10',regex:(val)=>{
                        if(val>10){
                          return false;
                        }
                        return true;
                      }}
                    ]}
                    {...formProps} 
                    label='地区:'
                    dataKey='selectorValue' data={[{label:"江西",value:'1'},{label:"湖南",value:'2'},{label:"湖北",value:'3'}]} placeholder='请选择' com={Select}  />
                  <FormRepeat initialValue={[{name:"hxz",isChecked:true}]} {...formProps} dataKey='Lists' renderRow={(rowProps)=>{
                    return this.createRow(rowProps);
                  }} />
                  <Button type='primary' onClick={this.add.bind(this,formProps)}>添加</Button>
                  <Button type='primary' onClick={this.showData.bind(this,formProps)}>ShowData</Button>
                  <Button type='primary' onClick={this.Reset.bind(this,formProps)}>Reset</Button>
                </React.Fragment>);
            }}/>
    </div>
  }
}

export default FormDemo;