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

export const productAddReducer = (state={product: {},loading: true}, action)=>{
    
    switch (action.type) {
        case productConstans.PRODUCT_UPDATE_REQUEST:
            return{ loading: true};
        case productConstans.PRODUCT_UPDATE_SUCCESS:
            return {loading: false , product: action.payload};
        case productConstans.PRODUCT_UPDATE_FAIL:
            return {loading: false , error: action.payload};
        default:
            return state;
    }
}

export const productUpdateReducer = (state={product: {},loading: true}, action)=>{
    
    switch (action.type) {
        case productConstans.PRODUCT_ADD_REQUEST:
            return{ loading: true};
        case productConstans.PRODUCT_ADD_SUCCESS:
            return {loading: false , product: action.payload};
        case productConstans.PRODUCT_ADD_FAIL:
            return {loading: false , error: action.payload};
        default:
            return state;
    }
}

export const productDeleteReducer = (state={product: {},loading: true}, action)=>{
    
    switch (action.type) {
        case productConstans.PRODUCT_DELETE_REQUEST:
            return{ loading: true};
        case productConstans.PRODUCT_DELETE_SUCCESS:
            return {loading: false , product: action.payload};
        case productConstans.PRODUCT_DELETE_FAIL:
            return {loading: false , error: action.payload};
        default:
            return state;
    }
};

export const productNewReducer = (state={products: [],loading: true}, action)=>{

    switch (action.type) {
        case productConstans.PRODUCT_NEW_REQUEST:
            return{ loading: true};
        case productConstans.PRODUCT_NEW_SUCCESS:
            return {loading: false , products: action.payload};
        case productConstans.PRODUCT_NEW_FAIL:
            return {loading: false , error: action.payload};
        default:
            return state;
    }
};