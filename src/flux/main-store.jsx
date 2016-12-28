import AppDispatcher from './dispatcher.jsx';
import CONSTANTS from './constants.jsx';
import { ReduceStore } from 'flux/utils';
import _ from 'lodash';

class MainStore extends ReduceStore {
    getInitialState() {
        return [];
    }
    reduce (state, action) {
        //the reducer
        switch(action.type) {
            case CONSTANTS.ADD_ITEM:
                return _.concat(state, action.data);
            case CONSTANTS.REMOVE_ITEM:
                return _.filter(state, function(el) { return el !== action.data; });
            default:
                return state;
        }
    }
};

export default new MainStore(AppDispatcher);