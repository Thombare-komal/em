import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import invoiceReducer from '../reducers/invoiceReducer'


const initialState = {
    invoice: []
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const middleware = [thunk, logger]



const store = createStore(invoiceReducer, initialState, compose(applyMiddleware(...middleware), composeEnhancer));

export default store;