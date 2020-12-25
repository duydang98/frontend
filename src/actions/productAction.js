import * as productConstans from '../constans/productConstans';
import  axios from 'axios';

export const listProduct = () => async (dispatch) =>{
            dispatch({
                type: productConstans.PRODUCT_LIST_REQUEST
            });
            try {
                const {data} = await axios.get('/product');
                dispatch({type: productConstans.PRODUCT_LIST_SUCCESS, payload: data});
            } catch (error) {
                dispatch({type: productConstans.PRODUCT_LIST_FAIL, payload: error.message});
            }
    }

export const detailProduct = (id_product) => async (dispatch) =>{
        dispatch({
            type: productConstans.PRODUCT_DETAIL_REQUEST
        });
        try {
            const {data} = await axios.get(`/product/detail/${id_product}`);
            dispatch({type: productConstans.PRODUCT_DETAIL_SUCCESS, payload: data});
        } catch (error) {
            dispatch({type: productConstans.PRODUCT_DETAIL_FAIL, 
                payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
            });
        }
}


