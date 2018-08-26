import {observable} from 'bricks-web';

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
        key:'home/quickstart',
      },
      {
        label:'Router 路由',
        key:'router',
        icon:'iconfont icon-printer',
        children:[
          {label:"Hash & History 路由",key:'home/router'},
          {label:"GlobalPage 全局页面",key:'home/globalpage'},
        ]
      },
      {
        label:'数据状态',
        icon:'iconfont icon-printer',
        key:'frfrf',children:[
            {label:"Mobx",key:'xxxxxxx1',key:'home/mobx'},
            {label:"AJAX",key:'xxxxxxx2',key:'home/ajax'},
        ]
      },
      {
        icon:'iconfont icon-reconciliation',
        label:'主题',
        key:'home/theme',
      },
      {
        label:"组件",
        icon:'iconfont icon-team',
        key:"components",
        children:[
            {label:"布局组件",group:[
              {label:"Grid 栅栏布局",key:'components/grid'},
              {label:"TableLayout 表格布局",key:'components/tableLayout'},
              {label:"VBox 垂直布局",key:'components/vbox',},
              {label:"HBox 水平布局",key:'components/hbox'},
              {label:"Group 组",key:'components/group'},
              {label:"Tabs 页签",key:'components/tabs',},
              {label:"Modal 弹出层",key:'components/modal',},
              {label:"Drawer 抽屉",key:'components/drawer',},
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
              {label:"DropDown 下拉选择",key:'components/dropdown',},
              {label:"Spin 加载指示器",key:'components/spin',},
              {label:"Message 消息",key:'components/message',},
              {label:"Image 图片",key:'components/image',}, 
              {label:"Swiper 幻灯片",key:'components/swiper',},
              {label:"Tree 树状",key:'xxxxxxx'},
            ]},
        ]
      },{
        label:'打包发布',
        key:'xxxxx',
        icon:'iconfont icon-linechart',
      },
    ];
}

export default new Store;

