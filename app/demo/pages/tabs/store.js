import {observable} from 'react-bricks-web';

class Store {
    @observable TabsData = [
        {label:"首页",key:'home',disabled:true},
        {label:"邮箱",key:'email'},
        {label:"动态",key:'info'},
        {label:"其他(10)",key:'other'},
    ];
    @observable selectedKey = 'home';
    @observable btnName ="xxx";
}

export default Store;

