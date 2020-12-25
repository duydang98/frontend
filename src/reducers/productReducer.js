import * as productConstans from '../constans/productConstans';

export const productListReducer = (state={products: [],loading: true}, action)=>{

    switch (action.type) {
        case productConstans.PRODUCT_LIST_REQUEST:
            return{ loading: true};
        case productConstans.PRODUCT_LIST_SUCCESS:
            return {loading: false , products: action.payload};
        case productConstans.PRODUCT_LIST_FAIL:
            return {loading: false , error: action.payload};
        default:
            return state;
    }
}

export const productDetailReducer = (state={product: {},loading: true}, action)=>{
    
    switch (action.type) {
        case productConstans.PRODUCT_DETAIL_REQUEST:
            return{ loading: true};
        case productConstans.PRODUCT_DETAIL_SUCCESS:
            return {loading: false , product: action.payload};
        case productConstans.PRODUCT_DETAIL_FAIL:
            return {loading: false , error: action.payload};
        default:
            return state;
    }
}