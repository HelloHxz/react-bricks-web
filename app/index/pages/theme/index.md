
# Theme 样式

提供运行时自定义样式切换

## 第一步

## 第二步

```css

// 系统的默认变量
@import '[视具体路径而定]/node_modules/bricks-web/src/components/theme/index.less';
// 很重要 定义当前样式的名称
@theme-namespace:a_theme;

// 在这里定义覆盖系统的组件变量 以及一些覆盖样式


// 所有组件的样式
@import '[视具体路径而定]/node_modules/bricks-web/src/components/theme/all.less';


```

## 第三步

使用import()引入样式并且切换主题名称

一下是DEMO中的使用例子

```javascript

import {React} from "bricks-web"

// key值就是less文件中定义的theme-namespace  color,name属性主要为了界面展示需要
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

export default class Demo extends React.Component {
  themeChange = (data)=>{
    data.Theme().then(()=>{
        //切换主题名称
      document.documentElement.className = data.key;
    }).catch(()=>{

    })
  }
  render() {
    const themeBlocks = [];
    for(let i = 0,j=Themes.length;i<j;i+=1){
      const item = Themes[i];
      themeBlocks.push(<div key={item.key} onClick={this.themeChange.bind(this,item)} style={{cursor:'pointer',backgroundColor:item.color,marginRight:20,width:30,height:30,display:'inline-block'}}></div>);
    }
    return (
        <React.Fragment>{themeBlocks}</React.Fragment>
    );
  }
}
```