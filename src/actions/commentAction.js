import axios from 'axios';
import * as commentConstants from '../constans/commentConstants';

export const listComment = (id_product) => async(dispatch)=>{
    dispatch({
        type: commentConstants.COMMENT_LIST_REQUEST
    });
    try {

        const {data} = await axios.get(`/comment/${id_product}`);
        
        dispatch({type: commentConstants.COMMENT_LIST_SUCCESS, payload: data});
    } catch (error) {
        dispatch({type: commentConstants.COMMENT_LIST_FAIL, payload: error.message});
    }
}

export const replyComment = (id_comment,content_comment) => async(dispatch,getState)=>{

    dispatch({
        type: commentConstants.COMMENT_REPLY_REQUEST
    });
    try {
        const {
            userSignin: { userInfo },
          } = getState();
          const {data} = await axios.post(`/comment/${id_comment}`,content_comment,{
            headers: {
                'x-access-token': userInfo.token
                }
            });
        
        dispatch({type: commentConstants.COMMENT_REPLY_SUCCESS, payload: data});
    } catch (error) {
        dispatch({type: commentConstants.COMMENT_REPLY_FAIL, payload: error.message});
    }
}


export const addComment = (comment) => async(dispatch,getState)=>{
    dispatch({
        type: commentConstants.COMMENT_ADD_REQUEST
    });
    try {
        const {
            userSignin: { userInfo },
          } = getState();
        const {data} = await axios.post(`/comment`,comment,{
            headers: {
                'x-access-token': userInfo.token
                }
            });
        
        dispatch({type: commentConstants.COMMENT_ADD_SUCCESS, payload: data});
    } catch (error) {
        dispatch({type: commentConstants.COMMENT_ADD_FAIL, payload: error.message});
    }
}