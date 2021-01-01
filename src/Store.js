import {applyMiddleware, compose ,combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducer';
import { commentAddReducer, commentListReducer, commentReplyReducer} from './reducers/commentReducer';
import { orderCreateReducer, orderDetailReducer, orderListReducer } from './reducers/orderReducer';
import { productAddReducer, productDeleteReducer, productDetailReducer, productListReducer, productUpdateReducer } from './reducers/productReducer';
import { stockAddReducer, stockDeleteReducer, stockListReducer, stockUpdateReducer } from './reducers/stockReducer';
import { userRegisterReducer, userSigninReducer } from './reducers/userReducer';

const initialState = {
    userSignin: {
        userInfo: localStorage.getItem('userInfo')
          ? JSON.parse(localStorage.getItem('userInfo'))
          : null,
      },
    cart:{
        cartItem: localStorage.getItem("cartItem") ? JSON.parse(localStorage.getItem("cartItem")) : [],
        shippingAddress: localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')): {},
        paymentMethod: 'COD',
    }
};
const composeEnhancer =  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducer = combineReducers({
    productList: productListReducer,
    productDetail: productDetailReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    orderCreate: orderCreateReducer,
    orderList: orderListReducer,
    orderDetail: orderDetailReducer,
    commentList: commentListReducer,
    commentReply: commentReplyReducer,
    commentAdd: commentAddReducer,
    productAdd: productAddReducer,
    productUpdate: productUpdateReducer,
    productDelete: productDeleteReducer,
    stockList: stockListReducer,
    stockAdd: stockAddReducer,
    stockUpdate: stockUpdateReducer,
    stockDelete: stockDeleteReducer,

})

const store = createStore(reducer, initialState , composeEnhancer(applyMiddleware(thunk)));

export default store;