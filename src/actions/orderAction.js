import axios from 'axios';
import * as orderConstants from '../constans/orderConstants';
import { CART_EMPTY } from '../constans/cartConstants';

export const createOrder = (order) => async (dispatch, getState) => {
    dispatch({ type: orderConstants.ORDER_CREATE_REQUEST, payload: order });
    try {
      const {
        userSignin: { userInfo },
      } = getState();
        const { data } = await axios.post('/order/add',order,{
            headers: {
                'x-access-token': userInfo.token
            }
        });
      dispatch({ type: orderConstants.ORDER_CREATE_SUCCESS, payload: data});
      dispatch({ type: CART_EMPTY });
      localStorage.removeItem('cartItem');
    } catch (error) {
      dispatch({
        type: orderConstants.ORDER_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const listOrder = () => async (dispatch, getState) => {
    dispatch({ type: orderConstants.ORDER_LIST_REQUEST});
    try {
      const {
        userSignin: { userInfo },
      } = getState();
        const { data } = await axios.get(`/order/my_order/${userInfo.id_user}`,{
            headers: {
                'x-access-token': userInfo.token
            }
        });
      dispatch({ type: orderConstants.ORDER_LIST_SUCCESS, payload: data});
      
    } catch (error) {
      dispatch({
        type: orderConstants.ORDER_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const detailOrder = (id_order) => async (dispatch,getState) =>{
    dispatch({
      type: orderConstants.ORDER_DETAIL_REQUEST
  });
  try {
    const {
      userSignin: { userInfo },
    } = getState();
    const {data} = await axios.get(`/order/order_detail/${id_order}`,{
      headers: {
          'x-access-token': userInfo.token
      }
  });
    dispatch({type: orderConstants.ORDER_DETAIL_SUCCESS, payload: data});
} catch (error) {
    dispatch({type: orderConstants.ORDER_DETAIL_FAIL, 
        payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    });
}
}

export const allOrder = () => async (dispatch, getState) => {
  dispatch({ type: orderConstants.ORDER_ALL_REQUEST});
  try {
    const {
      userSignin: { userInfo },
    } = getState();
      const { data } = await axios.get('/order/admin',{
          headers: {
              'x-access-token': userInfo.token
          }
      });
    dispatch({ type: orderConstants.ORDER_ALL_SUCCESS, payload: data});
    
  } catch (error) {
    dispatch({
      type: orderConstants.ORDER_ALL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateOrder = (id_order,status) => async (dispatch, getState) => {
  dispatch({ type: orderConstants.ORDER_UPDATE_REQUEST});
  try {
    const {
      userSignin: { userInfo },
    } = getState();
      const { data } = await axios.put(`/order/admin/update/${id_order}`,status,{
          headers: {
              'x-access-token': userInfo.token
          }
      });
    dispatch({ type: orderConstants.ORDER_UPDATE_SUCCESS, payload: data});
    
  } catch (error) {
    dispatch({
      type: orderConstants.ORDER_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};