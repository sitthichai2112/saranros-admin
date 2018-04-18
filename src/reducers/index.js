import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import login from './login';
import user from './user';
export default combineReducers({
    login,
    user,
    routing: routerReducer
});