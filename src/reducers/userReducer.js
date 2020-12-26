import * as userConstants from '../constans/userConstants';

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