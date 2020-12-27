import axios from 'axios';
import * as cartConstants from '../constans/cartConstants';

export const addToCart = (id_product,id_area,quantity_product) => async (dispatch, getState) =>{
    const {data} = await axios.get(`/product/detail/${id_product}`);

    dispatch({
        type: cartConstants.ADD_TO_CART,
        payload: {
            id_product: data.id_product,
            name_product: data.name_product,
            price_product: data.price_product,
            unit_product: data.unit_product,
            description_product: data.description_product,
            image: data.image,
            id_area,
            quantity_product 
        }
    });
    localStorage.setItem("cartItem",JSON.stringify(getState().cart.cartItem));
}

export const removeFromCart = (id_product) => (dispatch, getState) => {
    dispatch({ type: cartConstants.REMOVE_TO_CART , payload: id_product });
    localStorage.setItem('cartItem', JSON.stringify(getState().cart.cartItem));
  };

export const saveShippingAddress = (data) => (dispatch) => {
    dispatch({ type: cartConstants.CART_SAVE_SHIPPING_ADDRESS, payload: data });
    localStorage.setItem('shippingAddress', JSON.stringify(data));
  };
export const savePaymentMethod = (data) => (dispatch) => {
    dispatch({ type: cartConstants.CART_SAVE_PAYMENT_METHOD, payload: data });
  };