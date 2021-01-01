import axios from 'axios';
import React, {useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { replyComment } from '../actions/commentAction';
import Reply from '../components/Reply';

function Comment(props) {
    const [isreply,setIsreply] = useState(false);
    const {comment} = props;
    const onIsReply = ()=>{
        setIsreply(!isreply);
    }
    const [reply,setReply] = useState([]);
    //console.log(reply);
    const [newreplycomment,setNewreplycomment] = useState('');
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    const onReply = async ()=>{
       const data = await axios.get(`/comment/reply/${comment.id_comment}`);
       setReply(data.data);
    }
    const dispatch = useDispatch();
    const onAddReply = (e)=>{
        if(!userInfo){
            alert("You are not logged in");
        }else{
            if(newreplycomment){
                dispatch(replyComment(comment.id_comment,{"content_comment": newreplycomment}));
            }else{
                alert("You have not entered comments");
            }
        }
       
        
    }
    
    return (
        <div>
            <div className="media">
                <div className="media-left">
                    <img src={comment.user.avatar_user ? comment.user.avatar_user : "https://res.cloudinary.com/dnnkamj1s/image/upload/v1609466454/Images/Users/t%E1%BA%A3i_xu%E1%BB%91ng_zejglh.png"} alt="" className="media-object img-comment"/>
                </div>
                <div className="media-body">
                    <h5 className="media-heading title-coment">{comment.user.name_user}</h5>
                    <p className="komen">
                         {comment.content_comment}                
                    </p>
                    <button onClick={onIsReply}  className="btn btn-primary" >Reply</button>
                    {comment.reply.length>0 && (
                         <Link to="#" onClick={onReply} className="view-reply" >View Reply({comment.reply.length})</Link>
                    )}
                   
                        {isreply && (
                            <form className="side-search" onSubmit={onAddReply}>
                                <div className="input-group input-reply">
                                    <input id="myMessage" type="text" className="form-control input-sm chat_input" onChange={e=>setNewreplycomment(e.target.value)} name="msg" placeholder="Nhập vào đây" />
                                    <span className="input-group-btn">
                                    <button  id="sendbutton" className="btn btn-primary btn-sm" name="button"><i className="fa fa-send"></i></button>
                                    </span>
                                </div>
                            </form>
                            )}
                                                
                </div>
            </div>

            {reply.length>0 && (
                reply.map(item=>(
                    <Reply comment={item} key={item.id_comment} />
                ))
            )}
           
            
           
           
                                        
        </div>
    );
}

export default Comment;