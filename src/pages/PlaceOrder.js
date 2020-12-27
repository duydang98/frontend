import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import CheckOutStep from '../components/CheckOutStep';
function PlaceOrder(props) {
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    const cart = useSelector((state) => state.cart);
    if (!cart.paymentMethod) {
        props.history.push('/payment');
    }
    let transpost_fee = 0;
    const {cartItem} = cart;
    
    const total = cartItem.reduce((x,y)=>{
        return x + parseInt(y.price_product)*parseInt(y.quantity_product);
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
    const onAddOrder = async ()=>{
        const data = {
            "name_recipient": cart.shippingAddress.name_recipient,
            "phone_recipient": cart.shippingAddress.phone_recipient,
            "address_recipient": cart.shippingAddress.address_recipient,
            "payment_method": cart.paymentMethod,
            "order_items": cartItem
         };
         
         await axios.post('/order/add',data ,{
            headers: {
                'x-access-token': userInfo.token
            }
        });
    }
    return (
        <div id="content">
        <div className="newest">
          <div className="container">
          <CheckOutStep step1  step2 step3 step4></CheckOutStep>
            <div className="newest-content">
              <div className="newest-tab"> 
                <div id="myTabContent" className="tab-content">
                  <div role="tabpanel" className="tab-pane fade in active" id="1" aria-labelledby="cat-1">
                      <div className="row clearfix">
        
                            
                            <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                
                                <div className="row">
                                <div className="card card-body">
                                <h5 class="card-title">Shipping</h5>
                                    <p>
                                    <strong>Name:</strong> {cart.shippingAddress.name_recipient} <br/>
                                    <strong>Phone:</strong> {cart.shippingAddress.phone_recipient} <br/>
                                    <strong>Address: </strong> {cart.shippingAddress.address_recipient}<br/>
                                    </p>
                                </div>
                                </div>
                                <div className="row">
                                <div className="card card-body">
                                <h5 class="card-title">Payment</h5>
                    
                                    <p>
                                    <strong>Payment Method:</strong> {cart.paymentMethod}
                                    </p>
                                </div>
                                </div>
                                <div className="row">
                                <div className="card card-body">
                                <h5 class="card-title">Order Item</h5>
                               
                                    {
                                        cart.cartItem.map(item=>(
                                            <div className="row cart-it">
                                                <div className="col-xs-3"><img className="img-responsive img-cart" src={item.image} alt={item.id_product} />
                                                </div>
                                                <div className="col-xs-5">
                                                    <h4 className="product-name"><strong>{item.name_product}</strong></h4>
                                                </div>
                                                
                                                <div className="col-xs-4 cart-it-1">
                                                    <div className="col-xs-8 text-right">
                                                        <h6><strong> {item.price_product} <span className="text-muted"> x </span>  {item.quantity_product}</strong>  <span className="text-muted"> = </span></h6>
                                                    </div>
                                                    <div className="col-xs-4">
                                                        <h6><strong> {item.price_product * item.quantity_product }$</strong></h6>
                                                       
                                                    </div>
                                                   
                                                </div>
                                            </div>

                                        )
                                            
                                        )
                                    }
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                    <div className="sumary-order">
                                            <div className="card card-body">
                                            <h5 class="card-title">Order Sumary</h5>
                                            <p>
                                                <strong>Item:</strong> {total}$ <br/>
                                                <strong>Shipping:</strong> {transpost_fee}$ <br/>
                                                <strong>Total: </strong> {total+ transpost_fee}$<br/>
                                            </p>
                                            <button onClick={onAddOrder} class="btn btn-primary">Place Order</button>
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

export default PlaceOrder;