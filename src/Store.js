import {applyMiddleware, compose ,combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducer';
import { productDetailReducer, productListReducer } from './reducers/productReducer';

const initialState = {
    cart:{
        cartItem: localStorage.getItem("cartItem") ? JSON.parse(localStorage.getItem("cartItem")) : [],
    }
};
const composeEnhancer =  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducer = combineReducers({
    productList: productListReducer,
    productDetail: productDetailReducer,
    cart: cartReducer,
})

const store = createStore(reducer, initialState , composeEnhancer(applyMiddleware(thunk)));

export default store;