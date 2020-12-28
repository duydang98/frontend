import * as cartConstants from '../constans/cartConstants';

export const cartReducer = (state= {cartItem:[]}, action)=>{

    switch (action.type) {
        case cartConstants.ADD_TO_CART:
            const item = action.payload;
            const exitItem = state.cartItem.find(x=> x.id_product === item.id_product);
            if(exitItem){
                return{
                    ...state,
                    cartItem: state.cartItem.map((x)=>
                        x.id_product === exitItem.id_product ? item : x 
                    ),
                };
            }else{
                return {
                    ...state,
                    cartItem: [...state.cartItem ,item]
                };
            }
        case cartConstants.REMOVE_TO_CART:
                return {
                  ...state,
                  error: '',
                  cartItem: state.cartItem.filter((x) => x.id_product !== action.payload),
                };
        case cartConstants.CART_SAVE_SHIPPING_ADDRESS:
                return{
                    ...state,
                    shippingAddress: action.payload
                }
        case cartConstants.CART_SAVE_PAYMENT_METHOD:
                return{
                    ...state,
                    paymentMethod: action.payload
                }
        case cartConstants.CART_EMPTY:
                return { ...state, error: '', cartItem: [] };
        default:
            return state;
    }
}