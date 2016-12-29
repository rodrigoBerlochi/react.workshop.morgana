'use strict';

import AppDispatcher from './dispatcher.jsx';
import CONSTANTS from './constants.jsx';

let UserActions = {
    addItem(item){
        AppDispatcher.dispatch({
            type: CONSTANTS.ADD_ITEM,
            data: item
        });
    },

    removeItem(id){
        AppDispatcher.dispatch({
            type: CONSTANTS.REMOVE_ITEM,
            data: id
        });
    }
};

export default UserActions;