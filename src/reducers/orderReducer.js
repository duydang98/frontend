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

  export const orderListReducer = (state ={orders: []},action) =>{
      switch (action.type) {
        case orderConstants.ORDER_LIST_REQUEST:
          return  { loading: true };
        case orderConstants.ORDER_LIST_SUCCESS:
          return { loading: false, orders: action.payload };
        case orderConstants.ORDER_LIST_FAIL:
          return { loading: false, error: action.payload };
        default:
          return state;
      }
  };

  export const orderDetailReducer = (state={order: {},loading: true}, action)=>{
    
    switch (action.type) {
        case orderConstants.ORDER_DETAIL_REQUEST:
            return{ loading: true};
        case orderConstants.ORDER_DETAIL_SUCCESS:
            return {loading: false ,order: action.payload};
        case orderConstants.ORDER_DETAIL_FAIL:
            return {loading: false , error: action.payload};
        default:
            return state;
    }
};


export const orderAllReducer = (state ={orders: []},action) =>{
  switch (action.type) {
    case orderConstants.ORDER_ALL_REQUEST:
      return  { loading: true };
    case orderConstants.ORDER_ALL_SUCCESS:
      return { loading: false, orders: action.payload };
    case orderConstants.ORDER_ALL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const orderUpdateReducer = (state ={order: {}},action) =>{
  switch (action.type) {
    case orderConstants.ORDER_UPDATE_REQUEST:
      return  { loading: true };
    case orderConstants.ORDER_UPDATE_SUCCESS:
      return { loading: false, order: action.payload };
    case orderConstants.ORDER_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const orderRefundReducer = (state ={order: {}},action) =>{
  switch (action.type) {
    case orderConstants.ORDER_REFUND_REQUEST:
      return  { loading: true };
    case orderConstants.ORDER_REFUND_SUCCESS:
      return { loading: false, order: action.payload };
    case orderConstants.ORDER_REFUND_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
