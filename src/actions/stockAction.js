import * as stockConstans from '../constans/stockContants';
import  axios from 'axios';

export const listStock = () => async (dispatch,getState) =>{
    dispatch({
        type: stockConstans.STOCK_LIST_REQUEST
    });
    try {
        const {
            userSignin: { userInfo },
          } = getState();
        const {data} = await axios.get('/admin/stock/get',{
            headers: {
                'x-access-token': userInfo.token}}
            );
        
        dispatch({type: stockConstans.STOCK_LIST_SUCCESS, payload:data});
    } catch (error) {
        dispatch({type: stockConstans.STOCK_UPDATE_FAIL, payload: error.message});
    }
}

export const addStock = (stock) => async (dispatch,getState) =>{
    dispatch({
        type: stockConstans.STOCK_ADD_REQUEST
    });
    try {
        const {
            userSignin: { userInfo },
          } = getState();
        const {data} = await axios.post('/admin/stock/add',stock,{
            headers: {
                'x-access-token': userInfo.token}}
            );
        
        dispatch({type: stockConstans.STOCK_ADD_SUCCESS, payload:data});
    } catch (error) {
        dispatch({type: stockConstans.STOCK_ADD_FAIL, payload: error.message});
    }
}

export const updateStock = (id_product,id_area,stock) => async (dispatch,getState) =>{
    dispatch({
        type: stockConstans.STOCK_UPDATE_REQUEST
    });
    try {
        const {
            userSignin: { userInfo },
          } = getState();
        const {data} = await axios.put(`/admin/stock/update/${id_product}/${id_area}`,stock,{
            headers: {
                'x-access-token': userInfo.token}}
            );
        
        dispatch({type: stockConstans.STOCK_UPDATE_SUCCESS, payload:data});
    } catch (error) {
        dispatch({type: stockConstans.STOCK_UPDATE_FAIL, payload: error.message});
    }
}

export const deleteStock = (id_product,id_area) => async (dispatch,getState) =>{
    dispatch({
        type: stockConstans.STOCK_DELETE_REQUEST
    });
    try {
        const {
            userSignin: { userInfo },
          } = getState();
        const {data} = await axios.delete(`/admin/stock/delete/${id_product}/${id_area}`,{
            headers: {
                'x-access-token': userInfo.token}}
            );
        
        dispatch({type: stockConstans.STOCK_DELETE_SUCCESS, payload:data});
    } catch (error) {
        dispatch({type: stockConstans.STOCK_DELETE_FAIL, payload: error.message});
    }
}