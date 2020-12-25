import axios from 'axios';
import * as cartConstants from '../constans/cartConstants';

export const addToCart = (id_product,id_area,qty) => async (dispatch, getState) =>{
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
            qty 
        }
    });
    localStorage.setItem("cartItem",JSON.stringify(getState().cart.cartItem));
}

export const removeFromCart = (id_product) => (dispatch, getState) => {
    dispatch({ type: cartConstants.REMOVE_TO_CART , payload: id_product });
    localStorage.setItem('cartItem', JSON.stringify(getState().cart.cartItem));
  };
