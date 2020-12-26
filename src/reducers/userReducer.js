import * as userConstants from '../constans/userConstants';

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case userConstants.USER_REGISTER_REQUEST:
      return { loading: true };
    case userConstants.USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case userConstants.USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userSigninReducer = (state = {}, action) => {
    switch (action.type) {
      case userConstants.USER_SIGNIN_REQUEST:
        return { loading: true };
      case userConstants.USER_SIGNIN_SUCCESS:
        return { loading: false, userInfo: action.payload };
      case userConstants.USER_SIGNIN_FAIL:
        return { loading: false, error: action.payload };
      case userConstants.USER_SIGNOUT:
        return {};
      default:
        return state;
    }
  };