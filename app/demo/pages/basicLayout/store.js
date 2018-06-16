import {observable} from 'mobx';
class Store {
    @observable UserInfo = {};
    @observable MenuData = [
        {
        icon:'fas fa-camera-retro',
        label:'关于',
        key:'xxxxx',
        href:'home/about'
      },
      {
        icon:'fas fa-camera-retro',
        label:'快速上手',
        key:'xxxxx',
        href:"/home"
      },
      {
        label:"组件",
        icon:'fas fa-camera-retro',
        key:"xxxxxxxx",
        children:[
            {label:"Grid 表格布局",key:'xx',href:'/home/grid'},
            {label:"Layout",key:'xxxxxxx'},
            {label:"Button 按钮",key:'xxxxxxx',href:"/home/button"},
            {label:"PopView 弹出层",key:'xxxxxxx',href:'home/popview'},
            {label:"Tooltip 气泡提示",key:'xxxxxxx',href:'home/tooltip'},
            {label:"Popover 泡芙",key:'xxxxxxx',href:'home/popover'},
            {label:"Icon 按钮",key:'xxxxxxx'},
            {label:"Form 表单",key:"xxx",href:'home/form'},
            {label:"Input 文本输入",key:'xxxxxxx',href:"/home/input"},
            {label:"Modal 弹出层",key:'xxxxxxx',href:"/home/modal"},
            {label:"Message 消息",key:'xxxxxxx',href:"/home/message"},
            {label:"CheckBox 复选框",key:'xxxxxxx',href:"/home/checkbox"},
            {label:"CheckList 复选列表",key:'xxxxxxx'},
            {label:"Radio 单选框",key:'xxxxxxx'},
            {label:"Select 选择",key:'xxxxxxx',href:'home/select'},
            {label:"Tabs 标签",key:'xxxxxxx',href:'/home/tabs'},
            {label:"Table 表格",key:'xxxxxxx',href:'home/table'},
            {label:"Tree 树状",key:'xxxxxxx'},
            {label:"Menu 菜单",key:'xxxxxxx',children:[
                {label:'2.2.1',key:'xxxxxxxx'},
                {label:'2.2.2',key:'xxxxxxxx'}
            ]},
        ]
      },
      {
        label:'页面路由',
        key:'xxxxx',
      },
      {
        label:'全局处理',
        key:'xxxxx',
      },
      {
        label:'生命周期',
        key:'xxxxx',
      },
      {
        label:'数据状态',
        key:'frfrf',children:[
            {label:"Mobx",key:'xxxxxxx'},
            {label:"AJAX",key:'xxxxxxx',children:[
                {label:'4.2.1',key:'xxxxxxxx'},
                {label:'4.2.2',key:'xxxxxxxx'}
            ]},
        ]
      },
      {
        label:'异步加载',
        key:'xxxxx',
      },{
        label:'打包发布',
        key:'xxxxx',
      },
    ];
}

export default new Store;

