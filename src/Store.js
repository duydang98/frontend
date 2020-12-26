import {applyMiddleware, compose ,combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducer';
import { productDetailReducer, productListReducer } from './reducers/productReducer';
import { userRegisterReducer, userSigninReducer } from './reducers/userReducer';

const initialState = {
    userSignin: {
        userInfo: localStorage.getItem('userInfo')
          ? JSON.parse(localStorage.getItem('userInfo'))
          : null,
      },
    cart:{
        cartItem: localStorage.getItem("cartItem") ? JSON.parse(localStorage.getItem("cartItem")) : [],
    }
};
const composeEnhancer =  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducer = combineReducers({
    productList: productListReducer,
    productDetail: productDetailReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer

})

const store = createStore(reducer, initialState , composeEnhancer(applyMiddleware(thunk)));

export default store;