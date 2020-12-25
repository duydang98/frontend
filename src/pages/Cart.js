import React from 'react';
import { Link } from 'react-router-dom';

function Cart(props) {
    const id_product = props.match.params.id;
    const id_area =  props.match.params.area;
    const qty =  props.match.params.qty;
    console.log(id_product);
    console.log(qty);
    console.log(id_area);
    
 
    return (
        <div id="content">
        <div className="newest">
          <div className="container">
          <ol class="breadcrumb">
                <li>
                    <a href="/">Home</a>
                </li>
                <li><Link to="/product">Shop</Link> </li>
                <li class="active">Cart</li>
            </ol>
            <div className="newest-content">
              <div className="newest-tab"> 
                
                <div id="myTabContent" className="tab-content">
                  <div role="tabpanel" className="tab-pane fade in active" id="1" aria-labelledby="cat-1">
                        <div className="row clearfix">
                            <div className="col-xs-8">
                                <div className="panel panel-info">
                                    <div className="panel-heading">
                                        <div className="panel-title">
                                            <div className="row">
                                                <div className="col-xs-6">
                                                    <h5><span className="glyphicon glyphicon-shopping-cart"></span> Shopping Cart</h5>
                                                </div>
                                                <div className="col-xs-6">
                                                    <Link to="/product">
                                                    <button type="button" className="btn btn-primary btn-sm btn-block">
                                                        <span className="glyphicon glyphicon-share-alt"></span> Continue shopping
                                                    </button>
                                                    </Link>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel-body">
                                        <div className="row">
                                            <div className="col-xs-2"><img className="img-responsive img-cart" src="http://res.cloudinary.com/dnnkamj1s/image/upload/v1598064772/Images/products/uxezdj0azlfqfsml9nrd.jpg" alt=""/>
                                            </div>
                                            <div className="col-xs-4">
                                                <h4 className="product-name"><strong>Product name</strong></h4><h4><small>Product Unit</small></h4>
                                            </div>
                                            <div className="col-xs-6">
                                                <div className="col-xs-6 text-right">
                                                    <h6><strong>25.00 <span className="text-muted"> x</span></strong></h6>
                                                </div>
                                                <div className="col-xs-4">
                                                    <input type="text" className="form-control input-sm" value="1"/>
                                                </div>
                                                <div className="col-xs-2">
                                                    <button type="button" className="btn btn-link btn-xs">
                                                        <span className="glyphicon glyphicon-trash"> </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xs-2"><img className="img-responsive img-cart" src="http://res.cloudinary.com/dnnkamj1s/image/upload/v1598064772/Images/products/uxezdj0azlfqfsml9nrd.jpg" alt=""/>
                                            </div>
                                            <div className="col-xs-4">
                                                <h4 className="product-name"><strong>Product name</strong></h4><h4><small>Product Unit</small></h4>
                                            </div>
                                            <div className="col-xs-6">
                                                <div className="col-xs-6 text-right">
                                                    <h6><strong>25.00 <span className="text-muted"> x</span></strong></h6>
                                                </div>
                                                <div className="col-xs-4">
                                                    <input type="text" className="form-control input-sm" value="1"/>
                                                </div>
                                                <div className="col-xs-2">
                                                    <button type="button" className="btn btn-link btn-xs">
                                                        <span className="glyphicon glyphicon-trash"> </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        
                                        <div className="row">
                                            <div className="text-center">
                                                <div className="col-xs-9">
                                                    <h6 className="text-right">Added items?</h6>
                                                </div>
                                                <div className="col-xs-3">
                                                    <button type="button" className="btn btn-default btn-sm btn-block">
                                                        Update cart
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel-footer">
                                        <div className="row text-center">
                                            <div className="col-xs-9">
                                                <h4 className="text-right">Total <strong>$50.00</strong></h4>
                                            </div>
                                            <div className="col-xs-3">
                                                <button type="button" className="btn btn-success btn-block">
                                                    Checkout
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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

export default Cart;