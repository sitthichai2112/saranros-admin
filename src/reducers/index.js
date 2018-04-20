import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import login from './login';
import user from './user';
import modalconfirm from './modalconfirm';
import notification from './notification';
import modalalert from './modalalert';
export default combineReducers({
    login,
    user,
    modalconfirm,
    notification,
    modalalert,
    routing: routerReducer
});