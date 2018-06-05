import {observable} from 'mobx';
class Store {
    @observable FormData = {};
    @observable menuCollapsed = false;
}

export default Store;

