import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailProduct } from '../actions/productAction';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';
import Comment from '../components/Comment';
import { addToCart } from '../actions/cartAction';
import { addComment, listComment } from '../actions/commentAction';
function DetailProduct(props) {
    const dispatch = useDispatch();
    const id_product = props.match.params.id;
    const productDetail = useSelector((state) => state.productDetail);
    const {loading,error,product} = productDetail;
    const commentList = useSelector(state=> state.commentList);
    const {comments} = commentList;
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    const [product_qty,setProduct_qty] = useState(1);
    const [area_stock,setArea_stock] = useState(1);
    const [newcomment,setNewcomment] = useState('');
    useEffect(()=>{
      dispatch(detailProduct(id_product));
      dispatch(listComment(id_product));
  
    },[dispatch,id_product]);
    

    const onAddToCart = () => {
        dispatch(addToCart(id_product,parseInt(area_stock),product_qty));
        alert("Add to cart success");
        props.history.push("/cart");

        //props.history.push(`/cart/${id_product}/${product_qty}/${area_stock}`);
        // props.history.push({
        //     pathname: '/cart',
        //     state: { 
        //         id_product,
        //         area_stock,
        //         product_qty
        //      }
        //   });

    }
    
    const onAddComment = ()=>{
        if(!userInfo){
            alert("You are not logged in");
        }else{
            if(newcomment){
                dispatch(addComment({
                    "id_product": id_product,
                    "content_comment": newcomment
                }));
            }else{
                alert("You have not entered comments");
            }
        }
       
        
        props.history.push(`/product/${id_product}`);
    }
    
    return (
        <div id="content">
        <div className="newest">
          <div className="container">

            <div className="newest-content">
              <div className="newest-tab"> 
                
                <div id="myTabContent" className="tab-content">
                  <div role="tabpanel" className="tab-pane fade in active" id="1" aria-labelledby="cat-1">
                  <div className="card">
			        
                      
                          {
                              loading && (<LoadingBox></LoadingBox>) 
                          }
                          {
                              error && <MessageBox> {error}</MessageBox>
                          }
                         
                            {product && 
                            (  
                              <div>
                                  <div className="row clearfix">
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                        <img src={product.image} className="large img-responsive"  width={500} alt={product.name} />
                                    </div>
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <h3 className="product-title"> {product.name_product}</h3>
                                            <div className="rating">
                                                <div className="stars">
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                </div>
                                                <span className="review-no">41 reviews</span>
                                            </div>
                                            
                                    
                                            <form  className="form-horizontal">
                                            <div className="form-group">
                                                    <label for="" className="col-md-5 control-label">Unit:</label>

                                                    <div className="col-md-7">
                                                    <h4><span>{product.unit_product}</span></h4>
                                                    </div>  

                                                </div>
                                                <div className="form-group">
                                                    <label for="" className="col-md-5 control-label">Current price:</label>

                                                    <div className="col-md-7">
                                                    <h4 className="price"><span>$ {product.price_product}</span></h4>
                                                    </div>  

                                                </div>
                                                <div className="form-group">
                                                    <label for="" className="col-md-5 control-label">Quantity:</label>

                                                    <div className="col-md-7">
                                                        <input name="product_qty"
                                                         value={product_qty}
                                                        onChange={(e)=>setProduct_qty(e.target.value)}
                                                        type="number" min={1}  className="form-control"/>
                                                    </div>  


                                                </div>
                                                <div className="form-group">
                                                    <label for="" className="col-md-5 control-label">Area:</label>

                                                    <div className="col-md-7">
                                                        <select class="form-control" 
                                                        name="area_stock" 
                                                        value={area_stock}
                                                        onChange={(e)=>setArea_stock(e.target.value)}
                                                        >
                                                            <option value={1} >TP Hồ Chí Minh</option>
                                                            <option value={2}>TP Cần Thơ</option>
                                                            <option value={3}>Đà Lạt</option>
                                                        </select>
                                                    </div>  

                                                </div>
                                            </form>
                                            <div className="action">
                                                
                                                <button onClick={onAddToCart} className="add-to-cart btn btn-default i fa fa-shopping-cart" type="button"> Add to cart</button>
                                                
                                                
                                            </div>
                                    </div>
                                    
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <div className="card Description" >
                                            <div className="card-header">
                                                <h2>Description</h2>
                                            </div>
                                            <div className="card-body">
                                                <p className="product-description" >{product.description_product}.</p>
                                            </div> 
                                        </div>
                                        
                                    </div>
                                    
                                    </div>
                                    <div className="row cmt-row">
                                        <h3>Comment</h3>
                                        <div>
                                            <form className="side-search">
                                                
                                                    <div className="input-group input-new-comment" >
                                                        <input id="myMessage" type="text" className="form-control input-sm chat_input" onChange={e=>setNewcomment(e.target.value)} name="msg" placeholder="Nhập vào đây" />
                                                        <span className="input-group-btn">
                                                            <button  id="sendbutton" onClick={onAddComment} className="btn btn-primary btn-sm" name="button"><i className="fa fa-send"> Send</i></button>
                                                        </span>
                                                    </div>
                                                </form>
                                        </div>
                                        <div  className="comment-content">
                                        {comments && (
                                           comments.map(comment=>(
                                               <Comment comment={comment} key={comment.id_comment}  />
                                           ))
                                        )}
                                        </div>

    
                                    </div>

                               </div>
                                
                            )
                            }

                     
                    </div>
                    
                            

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>     
      </div>
    );
}

export default DetailProduct;