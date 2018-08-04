import {React,observer,TableLayout,Button,Tooltip,Icon} from "react-bricks-web"


const Themes = [
  {
    key:'a_theme',name:'绿',Theme:()=>{ return import(/* webpackChunkName: "a_theme" */ '../../theme/a_theme.less'); },color:'red',
  },{
    key:'b_theme',name:'B站红',Theme:()=>{ return import(/* webpackChunkName: "b_theme" */ '../../theme/b_theme.less'); },color:'#f25d8e',
  },{
    key:'c_theme',name:'红',Theme:()=>{ return import(/* webpackChunkName: "c_theme" */ '../../theme/c_theme.less'); },color:'green',
  },{
    key:'d_theme',name:'黑',Theme:()=>{ return import(/* webpackChunkName: "d_theme" */ '../../theme/d_theme.less'); },color:'black',
  },
];


@observer
class LayoutHeader extends React.Component {
  themeChange = (data)=>{
    data.Theme().then(()=>{
      document.documentElement.className = data.key;
    }).catch(()=>{

    })
  }

  headerBtn(){
    this.props.parent.headerButtonClick();
  }

  render() {
    const themeBlocks = [];
    for(let i = 0,j=Themes.length;i<j;i+=1){
      const item = Themes[i];
      themeBlocks.push(<div key={item.key} onClick={this.themeChange.bind(this,item)} style={{cursor:'pointer',backgroundColor:item.color,marginRight:20,width:30,height:30,display:'inline-block'}}></div>);
    }
    return (
        <TableLayout style={{height:'100%'}}>
            <TableLayout.Cell>
              <Button onClick={this.headerBtn.bind(this)} type='primarytext'><Icon type='bars' /></Button>
            </TableLayout.Cell>
            <TableLayout.Cell>
              <div>{themeBlocks}</div>
            </TableLayout.Cell>
            <TableLayout.Cell style={{width:250}}>
                <Tooltip title='关于' positionMode='absolute' placement='bottom'><Button>Bottom</Button></Tooltip>
            </TableLayout.Cell>
        </TableLayout>
    );
  }
}

export default LayoutHeader;