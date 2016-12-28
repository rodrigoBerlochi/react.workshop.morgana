import AppDispatcher from './dispatcher.jsx';
import CONSTANTS from './constants.jsx';

//dummy code, let's do it the right way
let ServerActions = {
    fetchListSuccess(data){
        AppDispatcher.dispatch({
            type: CONSTANTS.FETCH_LIST_SUCCESS,
            data: data
        });
    },

    fetchListError(data){
        AppDispatcher.dispatch({
            type: CONSTANTS.FETCH_LIST_ERROR,
            data: data
        });
    },

    fetchListStarted(){
        AppDispatcher.dispatch({
            type: CONSTANTS.FETCH_LIST //no data payload, but store could use this type to show a loading ui for example
        });
    }
};

export default ServerActions;