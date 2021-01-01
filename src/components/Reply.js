import React from 'react';


function Reply(props) {
    const {comment} =props;
    return (
        
                    <div className="geser">
                    <div className="media">
                        <div className="media-left">
                            <img src={comment.user.avatar_user ? comment.user.avatar_user : "https://res.cloudinary.com/dnnkamj1s/image/upload/v1609466454/Images/Users/t%E1%BA%A3i_xu%E1%BB%91ng_zejglh.png"} alt="" className="media-object img-comment" />
                        </div>
                        <div className="media-body">
                            <h5 className="media-heading title-coment">{comment.user.name_user}</h5>
                                <p className="komen">
                                    {comment.content_comment}  
                                </p>
                                                
                        </div>
                    </div>
                </div>
           
    );
}

export default Reply;