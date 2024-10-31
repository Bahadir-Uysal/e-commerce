import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import addressReducer from './reducers/addressReducer';
import authReducer from './reducers/authReducer';
import clientReducer from './reducers/clientReducer';
import creditCardReducer from './reducers/creditCardReducer';
import orderReducer from './reducers/orderReducer';
import productReducer from './reducers/productReducer';
import shoppingCartReducer from './reducers/shoppingCartReducer';

const rootReducer = combineReducers({
    address: addressReducer,
    auth: authReducer,
    client: clientReducer,
    creditCard: creditCardReducer,
    order: orderReducer,
    product: productReducer,
    shoppingCart: shoppingCartReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;