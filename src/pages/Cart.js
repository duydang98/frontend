import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../actions/cartAction';
import ProductCartItem from '../components/CartItem';

function Cart(props) {
    let id_product = "" ;
    let id_area = "";
    let qty="";
    let transpost_fee = 0;
    if(props.location.state){
         id_product = parseInt( props.location.state.id_product);
         id_area =  parseInt(props.location.state.area_stock);
         qty = parseInt(props.location.state.product_qty);
        
    }
    const cart = useSelector( state=> state.cart);
    const {cartItem} = cart;
    
    const total = cartItem.reduce((x,y)=>{
        return x + parseInt(y.price_product)*parseInt(y.qty);
    },0);
    
    if(cartItem.length>0){
        transpost_fee = 10;
        if(total>300){
            transpost_fee*=0.5;
        }
        if(total>500){
            transpost_fee = 0;
        }
    }
    
   const dispatch = useDispatch();
    useEffect(()=>{
            if(id_product){
                   dispatch(addToCart(id_product,id_area,qty));
            }
    },[dispatch, id_product , id_area , qty]);
    
    const checkOutPage = () => {
        props.history.push('/signin?redirect=shipping');
      };

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
                            <div className="col-xs-9">
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
                                        {cartItem.map((item)=><ProductCartItem item={item} key={item.id_product}></ProductCartItem>)}
                                        
                                        
                                        
    
                                        {/* <div className="row">
                                            <div className="text-center">
                                                <div className="col-xs-9">
                                                    <h6 className="text-right">Added items ?</h6>
                                                </div>
                                                <div className="col-xs-3">
                                                    <button type="button" className="btn btn-default btn-sm btn-block">
                                                        Update cart
                                                    </button>
                                                </div>
                                            </div>
                                        </div> */}
                                        
                                    </div>
                                   
                                        <div className="row text-center">
                                            <div className="col-xs-7">
                                                
                                            </div>
                                            <div className="col-xs-4">
                                                <h4 className="text-right">Transpost Fee <strong>${transpost_fee}</strong></h4>
                                            </div>

                                        </div>
                                   
                                    <div className="panel-footer">
                                        <div className="row text-center">
                                            <div className="col-xs-9">
                                                <h4 className="text-right">Total <strong>${total}</strong></h4>
                                            </div>
                                            <div className="col-xs-3">
                                                <button type="button" className="btn btn-success btn-block"  onClick={checkOutPage} >
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