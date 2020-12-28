import * as orderConstants from '../constans/orderConstants';

export const orderCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case orderConstants.ORDER_CREATE_REQUEST:
        return { loading: true };
      case orderConstants.ORDER_CREATE_SUCCESS:
        return { loading: false, order: action.payload };
      case orderConstants.ORDER_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case orderConstants.ORDER_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };