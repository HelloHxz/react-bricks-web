import {observable} from 'mobx';
class Store {
    @observable TabsData = [
        {label:"首页",key:'home'},
        {label:"邮箱",key:'email'},
        {label:"动态",key:'info'},
    ];
    @observable selectedKey = 'home';
}

export default Store;

