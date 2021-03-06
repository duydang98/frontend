import * as productConstans from '../constans/productConstans';
import  axios from 'axios';

function removeVietnameseTones(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
    str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
    str = str.replace(/đ/g,"d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
    // Remove extra spaces
    // Bỏ các khoảng trắng liền nhau
    str = str.replace(/ + /g," ");
    str = str.trim();
    // Remove punctuations
    // Bỏ dấu câu, kí tự đặc biệt
    
    return str;
}


export const listProduct = (keyword) => async (dispatch) =>{
            dispatch({
                type: productConstans.PRODUCT_LIST_REQUEST
            });
            try {

                const {data} = await axios.get('/product');
                const products = data.filter((task) => {
                    var name = removeVietnameseTones(task.name_product.toLowerCase());
                    return name.indexOf(removeVietnameseTones(keyword.toLowerCase())) !== -1;
                  });
                dispatch({type: productConstans.PRODUCT_LIST_SUCCESS, payload: products});
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

export const addProduct = (product) => async (dispatch,getState) =>{
    dispatch({
        type: productConstans.PRODUCT_ADD_REQUEST
    });
    try {
        const {
            userSignin: { userInfo },
          } = getState();
        const {data} = await axios.post('/admin/product/add',product,{
            headers: {
                'x-access-token': userInfo.token}
            });
        dispatch({type: productConstans.PRODUCT_ADD_SUCCESS, payload: data});
    } catch (error) {
        dispatch({type: productConstans.PRODUCT_ADD_FAIL, 
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        });
    }
}

export const updateProduct = (id,product) => async (dispatch,getState) =>{
    dispatch({
        type: productConstans.PRODUCT_UPDATE_REQUEST
    });
    try {
        const {
            userSignin: { userInfo },
          } = getState();
        const {data} = await axios.put(`/admin/product/update/${id}`,product,{
            headers: {
                'x-access-token': userInfo.token}
            });
        dispatch({type: productConstans.PRODUCT_UPDATE_SUCCESS, payload: data});
    } catch (error) {
        dispatch({type: productConstans.PRODUCT_UPDATE_FAIL, 
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        });
    }
}

export const deleteProduct = (id_product) => async (dispatch,getState) =>{
    dispatch({
        type: productConstans.PRODUCT_DELETE_REQUEST
    });
    try {
        const {
            userSignin: { userInfo },
          } = getState();
        const {data} = await axios.delete(`/admin/product/delete/${id_product}`,{
            headers: {
                'x-access-token': userInfo.token}
            });
        dispatch({type: productConstans.PRODUCT_DELETE_SUCCESS, payload: data});
    } catch (error) {
        dispatch({type: productConstans.PRODUCT_DELETE_FAIL, 
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        });
    }
};

export const newProduct = (keyword) => async (dispatch) =>{
    dispatch({
        type: productConstans.PRODUCT_NEW_REQUEST
    });
    try {

        const {data} = await axios.get('/product/new');
        
        dispatch({type: productConstans.PRODUCT_NEW_SUCCESS, payload: data});
    } catch (error) {
        dispatch({type: productConstans.PRODUCT_NEW_FAIL, payload: error.message});
    }
};
