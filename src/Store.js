import {applyMiddleware, compose ,combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { productDetailReducer, productListReducer } from './reducers/productReducer';

const initialState = {};
const composeEnhancer =  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducer = combineReducers({
    productList: productListReducer,
    productDetail: productDetailReducer,
})

const store = createStore(reducer, initialState , composeEnhancer(applyMiddleware(thunk)));

export default store;