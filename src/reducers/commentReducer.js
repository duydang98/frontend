import * as commentConstants from '../constans/commentConstants';

export const commentListReducer = (state={comments: [],loading: true}, action)=>{

    switch (action.type) {
        case commentConstants.COMMENT_LIST_REQUEST:
            return{ loading: true};
        case commentConstants.COMMENT_LIST_SUCCESS:
            return {loading: false , comments: action.payload};
        case commentConstants.COMMENT_LIST_FAIL:
            return {loading: false , error: action.payload};
        default:
            return state;
    }
}

export const commentReplyReducer = (state={reply: {}}, action)=>{

    switch (action.type) {
        case commentConstants.COMMENT_REPLY_REQUEST:
            return{ loading: true};
        case commentConstants.COMMENT_REPLY_SUCCESS:
            return {loading: false , reply: action.payload};
        case commentConstants.COMMENT_REPLY_FAIL:
            return {loading: false , error: action.payload};
        default:
            return state;
    }
}
export const commentAddReducer = (state={comment: {}}, action)=>{

    switch (action.type) {
        case commentConstants.COMMENT_ADD_REQUEST:
            return{ loading: true};
        case commentConstants.COMMENT_ADD_SUCCESS:
            return {loading: false , comment: action.payload};
        case commentConstants.COMMENT_ADD_FAIL:
            return {loading: false , error: action.payload};
        default:
            return state;
    }
}