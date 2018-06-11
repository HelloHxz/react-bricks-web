import {React,PageView,observer,PageContainer,Row,Col,Form,Input,Select,Button} from "react-bricks-web"

const {FormItem,FormRepeat} = Form;
@PageView()
class FormDemo extends React.PureComponent {

  componentDidMount() {
  }

  constructor(props){
    super(props);
  }

  add(formProps){
    formProps.form.store.Lists.push({});
  }

  render() {
    return <div>
          <Form renderContent={(formProps)=>{
              return (
                <React.Fragment>
                  <FormItem {...formProps} rule={[]} dataKey='inputValue' placeholder='请输入' com={Input}  />
                  <FormItem {...formProps} rule={[]} initialValue='200' dataKey='inputValue1' com={Input}  />
                  <FormItem rule={[
                    {message:'必填!',regex:'required'},
                    {message:'小于10',regex:(val)=>{
                      if(val>10){
                        return false;
                      }
                      return true;
                    }}
                  ]} {...formProps} dataKey='selectorValue' data={[{label:"江西",value:'1'}]} placeholder='请选择' com={Select}  />
                  <FormRepeat initialValue={[{name:"hxz"}]} {...formProps} dataKey='Lists' renderRow={(rowProps)=>{
                    return (
                      <div>
                          <FormItem {...rowProps} dataKey='name' label={"姓名"} com={Input}/>
                          <FormItem {...rowProps} dataKey='name1' com={Input}/>
                      </div>
                    );
                  }} />
                  <Button type='primary' onClick={this.add.bind(this,formProps)}>添加</Button>
                </React.Fragment>);
            }}/>
    </div>
  }
}

export default FormDemo;