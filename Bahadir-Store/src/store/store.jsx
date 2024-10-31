import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import shoppingCartReducer from './reducers/shopingCartReducer.jsx';
import productReducer from './reducers/productReducer.jsx';
import orderReducer from './reducers/orderReducer.jsx';
import creditCardReducer from './reducers/creditCardReducer.jsx';
import clientReducer from './reducers/clientReducer.jsx';
import authReducer from './reducers/authReducer.jsx';
import addressReducer from './reducers/addressReducer.jsx';

const rootReducer = combineReducers({
    address: addressReducer,
    auth: authReducer,
    client: clientReducer,
    creditCard: creditCardReducer,
    order: orderReducer,
    product: productReducer,
    shoppingCart: shoppingCartReducer
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
);

export default store;