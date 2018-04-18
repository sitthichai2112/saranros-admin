import { createStore, combineReducers, applyMiddleware } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import history from './history'

const store = createStore(reducers, applyMiddleware(thunk, routerMiddleware(history)))

export default store;