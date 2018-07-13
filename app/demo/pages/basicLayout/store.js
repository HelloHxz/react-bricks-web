import {observable} from 'react-bricks-web';

class Store {
    @observable UserInfo = {};
    @observable MenuData = [
        {
        icon:'iconfont icon-folder-open',
        label:'关于',
        key:'home/about',
      },
      {
        icon:'iconfont icon-reconciliation',
        label:'快速上手',
        key:'home',
      },{
        icon:'iconfont icon-reconciliation',
        label:'主题',
        key:'home/theme',
      },
      {
        label:'页面路由',
        key:'xxxxx',
        icon:'iconfont icon-desktop',
        children:[
          {label:"HashRouter Hash路由",key:'hashnavigate',icon:'iconfont icon-desktop'},
          {label:"HistoryRouter History路由",key:'HistoryNavigate'}
        ]
      },
      {
        label:"组件",
        icon:'iconfont icon-team',
        key:"components",
        children:[
            {label:"布局组件",group:[
              {label:"Grid 栅栏布局",key:'components/grid',icon:'iconfont icon-desktop',},
              {label:"TableLayout 表格布局",key:'components/tableLayout'},
              {label:"VBox 垂直布局",key:'components/vbox',},
              {label:"HBox 水平布局",key:'components/hbox'},
            ]},
            {label:"表单组件",group:[
              {label:"Button 按钮",key:'components/button'},
              {label:"Form 表单",key:"components/form"},
              {label:"Input 文本输入",key:'components/input'},
              {label:"CheckBox 复选框",key:'components/checkbox'},  
              {label:"CheckGroup 复选框组",key:'components/checkgroup'},
              {label:"Radio 单选框",key:'components/radio',},
              {label:"Select 选择",key:'components/select',},
              {label:"Table 表格",key:'components/table',},
            ]},
            {label:"功能组件",group:[
              {label:"PopView 弹出层",key:'components/popview',},
              {label:"Tooltip 气泡提示",key:'components/tooltip',},
              {label:"Popover 泡芙",key:'components/popover',},
              {label:"Icon 图标",key:'components/icon',},
              {label:"Modal 弹出层",key:'components/modal',},
              {label:"Spin 加载指示器",key:'components/spin',},
              {label:"Message 消息",key:'components/message',},
              {label:"Image 图片",key:'components/image',}, 
              {label:"Tabs 页签",key:'components/tabs',},
              {label:"Swiper 幻灯片",key:'components/swiper',},
              {label:"Tree 树状",key:'xxxxxxx'},
            ]},
        ]
      },
      {
        label:'全局处理',
        key:'xxxxx',
        icon:'iconfont icon-mail',
      },
      {
        label:'生命周期',
        key:'xxxxx',
        icon:'iconfont icon-laptop',
      },
      {
        label:'数据状态',
        icon:'iconfont icon-printer',
        key:'frfrf',children:[
            {label:"Mobx",key:'xxxxxxx1'},
            {label:"AJAX",key:'xxxxxxx2',children:[
                {label:'4.2.1',key:'xxxxxxxx3'},
                {label:'4.2.2',key:'xxxxxxxx4'}
            ]},
        ]
      },
      {
        label:'异步加载',
        key:'xxxxx',
        icon:'iconfont icon-moneycollect',
      },{
        label:'打包发布',
        key:'xxxxx',
        icon:'iconfont icon-linechart',
      },
    ];
}

export default new Store;

