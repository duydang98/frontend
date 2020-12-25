import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { detailProduct } from '../actions/productAction';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';
function DetailProduct(props) {
    const dispatch = useDispatch();
    const productDetail = useSelector((state) => state.productDetail);
    const {loading,error,product} = productDetail;
    console.log(product);

    useEffect(()=>{
      dispatch(detailProduct(props.match.params.id));
  
    },[]);
    return (
        <div id="content">
        <div className="newest">
          <div className="container">
          <ol class="breadcrumb">
                <li>
                    <a href="/">Home</a>
                </li>
                <li><Link to="/product">Shop</Link> </li>
                <li class="active">Detail Product</li>
            </ol>
            <div className="newest-content">
              <div className="newest-tab"> 
                
                <div id="myTabContent" className="tab-content">
                  <div role="tabpanel" className="tab-pane fade in active" id="1" aria-labelledby="cat-1">
                  <div className="card">
			        
                      <div className="row clearfix">
                          {
                              loading && (<LoadingBox></LoadingBox>) 
                          }
                          {
                              error && <MessageBox> {error}</MessageBox>
                          }
                         
                            {product && 
                            (  
                              <div>
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                        <img src={product.image} className="large"  width={500} alt={product.name} />
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
                                                        <input name="product_qty" type="text"  className="form-control"/>
                                                    </div>  

                                                </div>
                                                <div className="form-group">
                                                    <label for="" className="col-md-5 control-label">Area:</label>

                                                    <div className="col-md-7">
                                                        <select class="form-control" >
                                                            <option selected value="4" >Cần Thơ</option>
                                                            <option value="1">TP HCM</option>
                                                            <option value="2">Đà Lạt</option>
                                                            <option value="3">Hậu Giang</option>
                                                        </select>
                                                    </div>  

                                                </div>
                                            </form>
                                            <div className="action">
                                                <button className="add-to-cart btn btn-default i fa fa-shopping-cart" type="button"> Add to cart</button>
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
      </div>
    );
}

export default DetailProduct;