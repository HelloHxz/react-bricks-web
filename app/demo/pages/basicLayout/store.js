import {observable} from 'mobx';
class Store {
    @observable UserInfo = {};
    @observable MenuData = [
        {
        icon:'',
        label:'关于',
        key:'xxxxx',
        href:'home/about'
      },
      {
        label:'快速上手',
        key:'xxxxx',
        href:"/home"
      },
      {
        label:"组件",
        key:"xxxxxxxx",
        children:[
            {label:"Grid",key:'xx',href:'/home/grid'},
            {label:"Layout",key:'xxxxxxx'},
            {label:"Button",key:'xxxxxxx',href:"/home/button"},
            {label:"Icon",key:'xxxxxxx'},
            {label:"Form",key:"xxx",href:'home/form'},
            {label:"Input",key:'xxxxxxx',href:"/home/input"},
            {label:"Modal",key:'xxxxxxx',href:"/home/modal"},
            {label:"Message",key:'xxxxxxx',href:"/home/message"},
            {label:"CheckBox",key:'xxxxxxx'},
            {label:"CheckList",key:'xxxxxxx'},
            {label:"Radio",key:'xxxxxxx'},
            {label:"PopView",key:'xxxxxxx'},
            {label:"Select",key:'xxxxxxx',href:'home/select'},
            {label:"PopView",key:'xxxxxxx',href:'home/popview'},
            {label:"Tabs",key:'xxxxxxx'},
            {label:"Table",key:'xxxxxxx'},
            {label:"Tree",key:'xxxxxxx'},
            {label:"Menu",key:'xxxxxxx',children:[
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

