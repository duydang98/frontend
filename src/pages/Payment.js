import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../actions/cartAction';
import CheckOutStep from '../components/CheckOutStep';

function Payment(props) {

    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    
    const cart = useSelector(state=> state.cart);
    const {cartItem,shippingAddress} = cart;
   

    const [payment,setPayment] = useState('COD');
    const dispatch = useDispatch();

    const submitHandler = (e)=>{
        e.preventDefault();
        dispatch(savePaymentMethod(payment));

       
        props.history.push('/order');
        
        
    }
    useEffect(()=>{
        if(!userInfo){
            alert("Bạn chưa đăng nhập ");
            props.history.push('/signin');
        }
        if(cartItem.length===0){
            alert("Bạn chưa thêm sản phẩm vào giỏ hàng");
            props.history.push('/product');
        }
        if(Object.keys(shippingAddress).length===0){
            alert("Bạn chưa thêm địa chỉ giao hàng");
            props.history.push('/shipping');
        }
       
    },[props.history,userInfo,cartItem,shippingAddress])
    return (
        <div id="content">
        <div className="newest">
          <div className="container">
          <CheckOutStep step1  step2 step3></CheckOutStep>
            <div className="newest-content">
              <div className="newest-tab"> 
                <div id="myTabContent" className="tab-content">
                  <div role="tabpanel" className="tab-pane fade in active" id="1" aria-labelledby="cat-1">
                      <div className="row clearfix">

                      
                      <form className="form-horizontal form-register" onSubmit={submitHandler}>
                           

                            <div className="form-group">
                                <label className="control-label col-sm-6">Payment Method</label>
                                <div className="col-sm-6">
                                    <div className="row">
                                        
        
                                        
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <label className="radio-inline">
                                                <input type="radio" id="COD" name="payment" onChange={(e)=>setPayment(e.target.value)} checked value="COD"/>
                                                COD(Cash On Delivery)
                                            </label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                            <label className="radio-inline">
                                                
                                                <input type="radio" id="stripe" name="payment" onChange={(e)=>setPayment(e.target.value)}  value="stripe"/>
                                                 <img src="https://res.cloudinary.com/dnnkamj1s/image/upload/v1609656921/Images/stripe_fzy9bl.png" className="img-payment" alt="" /> 
                                            </label>
                                            
                                        </div>
                                    </div>
                                    {/* <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <label className="radio-inline">
                                                <input type="radio" id="paypal" name="payment" onChange={(e)=>setPayment(e.target.value)}  value="paypal"/>Paypal
                                            </label>
                                        </div>
                                    
                    
                                    </div> */}
                                </div>
                            </div> 
                            
                           
                            
                            <div className="form-group">
                                <div className="col-sm-9 col-sm-offset-3">
                                    <button type="submit" className="btn btn-primary btn-block">Continue</button>
                                </div>
                            </div>
                            
                        </form>
                        
                     
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

export default Payment;