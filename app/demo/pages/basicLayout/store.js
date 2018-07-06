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
        key:"xxxxxxxx",
        children:[
            {label:"Grid 栅栏布局",key:'home/grid',href:'/home/grid'},
            {label:"TableLayout 表格布局",key:'home/tableLayout',href:'/home/tableLayout'},
            {label:"VBox 垂直布局",key:'home/vbox',href:'/home/vbox'},
            {label:"HBox 水平布局",key:'home/hbox',href:'/home/hbox'},
            {label:"Button 按钮",key:'home/button',href:"/home/button"},
            {label:"PopView 弹出层",key:'home/popview',href:'home/popview'},
            {label:"Tooltip 气泡提示",key:'home/tooltip',href:'home/tooltip'},
            {label:"Popover 泡芙",key:'home/popover',href:'home/popover'},
            {label:"Icon 图标",key:'home/icon',href:'home/icon'},
            {label:"Spin 加载指示器",key:'home/spin',href:'home/spin'},
            {label:"Form 表单",key:"home/form",href:'home/form'},
            {label:"Input 文本输入",key:'home/input',href:"/home/input"},
            {label:"Modal 弹出层",key:'home/modal',href:"/home/modal"},
            {label:"Message 消息",key:'home/message',href:"/home/message"},
            {label:"CheckBox 复选框",key:'home/checkbox',href:"/home/checkbox"},
            {label:"CheckGroup 复选框组",key:'home/checkgroup',href:"/home/checkgroup"},
            {label:"Radio 单选框",key:'home/radio',href:"/home/radio"},
            {label:"Image 图片",key:'home/image',href:"/home/image"},
            {label:"Select 选择",key:'home/select',href:'home/select'},
            {label:"Tabs 页签",key:'home/tabs',href:'/home/tabs'},
            {label:"Table 表格",key:'home/table',href:'home/table'},
            {label:"Swiper 幻灯片",key:'home/swiper',href:'home/swiper'},
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

