import {React,PageView,observer,PageContainer,Row,Col,Form,Input,Select} from "react-bricks"

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
                  <FormItem {...formProps} rule={[]} dataKey='inputValue' com={Input}  />
                  <FormItem {...formProps} rule={[]} initialValue='200' dataKey='inputValue1' com={Input}  />
                  <FormItem rule={[
                    {message:'必填!',regex:'required'},
                    {message:'小于10',regex:(val)=>{
                      if(val>10){
                        return false;
                      }
                      return true;
                    }}
                  ]} {...formProps} dataKey='selectorValue' com={Select}  />
                  <FormRepeat initialValue={[{name:"hxz"}]} {...formProps} dataKey='Lists' renderRow={(rowProps)=>{
                    return (
                      <div>
                          <FormItem {...rowProps} dataKey='name' label={"姓名"} com={Input}/>
                          <FormItem {...rowProps} dataKey='name1' com={Input}/>
                      </div>
                    );
                  }} />
                  <button onClick={this.add.bind(this,formProps)}>添加</button>
                </React.Fragment>);
            }}/>
    </div>
  }
}

export default FormDemo;