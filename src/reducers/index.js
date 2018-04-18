import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import login from './login';
import user from './user';
import modalconfirm from './modalconfirm';
import notification from './notification'
export default combineReducers({
    login,
    user,
    modalconfirm,
    notification,
    routing: routerReducer
});