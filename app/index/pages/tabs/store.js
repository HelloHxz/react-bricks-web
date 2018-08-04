import {observable} from 'bricks-web';

class Store {
    @observable TabsData = [
        {label:"代码示例",key:'home',allowClose:true},
        {label:"知识点",key:'email',allowClose:true},
        {label:"动态",key:'info'},
        {label:"其他(10)",key:'other'},
    ];
    @observable selectedKey = 'home';
    @observable btnName ="xxx";
}

export default Store;

