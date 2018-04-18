import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import login from './login';
import user from './user';
import modalconfirm from './modalconfirm';
export default combineReducers({
    login,
    user,
    modalconfirm,
    routing: routerReducer
});