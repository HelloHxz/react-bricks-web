import {observable} from 'bricks-web';
class Store {
    @observable FormData = {};
    @observable menuCollapsed = false;
}

export default Store;

