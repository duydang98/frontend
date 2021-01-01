import * as stockConstans from '../constans/stockContants';

export const stockListReducer = (state={stocks: [],loading: true}, action)=>{

    switch (action.type) {
        case stockConstans.STOCK_LIST_REQUEST:
            return{ loading: true};
        case stockConstans.STOCK_LIST_SUCCESS:
            return {loading: false , stocks: action.payload};
        case stockConstans.STOCK_LIST_FAIL:
            return {loading: false , error: action.payload};
        default:
            return state;
    }
}

export const stockAddReducer = (state={stock: {},loading: true}, action)=>{

    switch (action.type) {
        case stockConstans.STOCK_ADD_REQUEST:
            return{ loading: true};
        case stockConstans.STOCK_ADD_SUCCESS:
            return {loading: false , stock: action.payload};
        case stockConstans.STOCK_ADD_FAIL:
            return {loading: false , error: action.payload};
        default:
            return state;
    }
}
export const stockUpdateReducer = (state={stock: {},loading: true}, action)=>{

    switch (action.type) {
        case stockConstans.STOCK_UPDATE_REQUEST:
            return{ loading: true};
        case stockConstans.STOCK_UPDATE_SUCCESS:
            return {loading: false , stock: action.payload};
        case stockConstans.STOCK_UPDATE_FAIL:
            return {loading: false , error: action.payload};
        default:
            return state;
    }
}
export const stockDeleteReducer = (state={stock: {},loading: true}, action)=>{

    switch (action.type) {
        case stockConstans.STOCK_DELETE_REQUEST:
            return{ loading: true};
        case stockConstans.STOCK_DELETE_SUCCESS:
            return {loading: false , stock: action.payload};
        case stockConstans.STOCK_DELETE_FAIL:
            return {loading: false , error: action.payload};
        default:
            return state;
    }
}