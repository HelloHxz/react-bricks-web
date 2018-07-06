import {observable} from 'react-bricks-web';

class Store {
    @observable UserInfo = {};
    @observable MenuData = [
        {
        icon:'fas fa-camera-retro',
        label:'关于',
        key:'home/about',
        href:'home/about'
      },
      {
        icon:'fas fa-camera-retro',
        label:'快速上手',
        key:'home',
        href:"/home"
      },
      {
        label:"组件",
        icon:'fas fa-camera-retro',
        key:"components",
        children:[
            {label:"Grid 栅栏布局",key:'components/grid',href:'components/grid'},
            {label:"TableLayout 表格布局",key:'components/tableLayout',href:'components/tableLayout'},
            {label:"VBox 垂直布局",key:'components/vbox',href:'components/vbox'},
            {label:"HBox 水平布局",key:'components/hbox',href:'components/hbox'},
            {label:"Button 按钮",key:'components/button',href:"components/button"},
            {label:"PopView 弹出层",key:'components/popview',href:'components/popview'},
            {label:"Tooltip 气泡提示",key:'components/tooltip',href:'components/tooltip'},
            {label:"Popover 泡芙",key:'components/popover',href:'components/popover'},
            {label:"Icon 图标",key:'components/icon',href:'components/icon'},
            {label:"Spin 加载指示器",key:'components/spin',href:'components/spin'},
            {label:"Form 表单",key:"components/form",href:'components/form'},
            {label:"Input 文本输入",key:'components/input',href:"components/input"},
            {label:"Modal 弹出层",key:'components/modal',href:"components/modal"},
            {label:"Message 消息",key:'components/message',href:"components/message"},
            {label:"CheckBox 复选框",key:'components/checkbox',href:"components/checkbox"},
            {label:"CheckGroup 复选框组",key:'components/checkgroup',href:"components/checkgroup"},
            {label:"Radio 单选框",key:'components/radio',href:"components/radio"},
            {label:"Image 图片",key:'components/image',href:"components/image"},
            {label:"Select 选择",key:'components/select',href:'components/select'},
            {label:"Tabs 页签",key:'components/tabs',href:'components/tabs'},
            {label:"Table 表格",key:'components/table',href:'components/table'},
            {label:"Swiper 幻灯片",key:'components/swiper',href:'components/swiper'},
            {label:"Tree 树状",key:'xxxxxxx'},
            {label:"Menu 菜单",key:'menu',children:[
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

