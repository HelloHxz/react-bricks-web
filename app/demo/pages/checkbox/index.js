import {React,PageView,observer,PageContainer,Row,CheckBox} from "react-bricks-web"

@PageView()
class CheckBoxDemo extends React.PureComponent {

  componentDidMount() {
  }

  constructor(props){
    super(props);
  }
  render() {
    return <div>
           <CheckBox />
           <CheckBox value={true} />
           <CheckBox value={'indeterminate'} />
    </div>
  }
}

export default CheckBoxDemo;