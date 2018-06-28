import {React,PageView,observer,PageContainer,Row,Col,CheckBox,Form,Input,Select,Button} from "react-bricks-web"
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
          <FormItem {...rowProps} dataKey='name1' com={Input}/>
          <FormItem {...rowProps} dataKey='isChecked' initialValue={false} com={CheckBox}/>
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
          ]} {...rowProps} dataKey='itemselectValue' data={[{label:"江西",value:'1'},{label:"湖南",value:'2'},{label:"湖北",value:'3'}]} placeholder='请选择' com={Select}  />
      </div>
    )
  }

  render() {
    return <div>
          <Form initialValue={{
            inputValue:'hahha'
          }} renderContent={(formProps)=>{
              return (
                <React.Fragment>
                  <FormItem {...formProps} rule={[]} dataKey='inputValue' placeholder='请输入' com={Input}  />
                  <FormItem {...formProps} rule={[]} initialValue='200' dataKey='inputValue1' com={Input}  />
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
                  ]} {...formProps} dataKey='selectorValue' data={[{label:"江西",value:'1'},{label:"湖南",value:'2'},{label:"湖北",value:'3'}]} placeholder='请选择' com={Select}  />
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