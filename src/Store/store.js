import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'

import * as reducers from '../Reducers/reducers'


export default createStore(combineReducers(reducers),{}, applyMiddleware(thunk))