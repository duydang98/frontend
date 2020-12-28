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