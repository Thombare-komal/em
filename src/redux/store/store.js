import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/reducers';
import { logger } from 'redux-logger';


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const middleware = [logger];

const store = createStore(rootReducer, compose(applyMiddleware(...middleware), composeEnhancer));

export default store;