import * as userConstants from '../constans/userConstants';
import Axios from 'axios';

export const register = (datapost) => async (dispatch) => {
  dispatch({ type: userConstants.USER_REGISTER_REQUEST, payload: datapost });
  try {
    const { data } = await Axios.post('/user/register', datapost);

    dispatch({ type: userConstants.USER_REGISTER_SUCCESS, payload: data });
    //document.location.href = '/signin';
    // dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    // localStorage.setItem('userInfo', JSON.stringify(data));

  } catch (error) {
    dispatch({
      type: userConstants.USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const signin = (email, password) => async (dispatch) => {
    dispatch({ type: userConstants.USER_SIGNIN_REQUEST, payload: { email, password } });

    try {
      const { data } = await Axios.post('/user/login', { email, password });
      dispatch({ type: userConstants.USER_SIGNIN_SUCCESS, payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: userConstants.USER_SIGNIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const signout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    localStorage.removeItem('cartItem');
    localStorage.removeItem('shippingAddress');
    dispatch({ type: userConstants.USER_SIGNOUT });
    document.location.href = '/signin';
  };