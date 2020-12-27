import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../actions/cartAction';
import CheckOutStep from '../components/CheckOutStep';

function Payment(props) {

    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    if(!userInfo){
        props.history.push('/signin');
    }
    const cart = useSelector(state=> state.cart);
    const {shippingAddress} = cart;
    if(!shippingAddress){
        props.history.push('/shipping');
    }

    const [payment,setPayment] = useState('COD');
    const dispatch = useDispatch();

    const submitHandler = (e)=>{
        e.preventDefault();
        dispatch(savePaymentMethod(payment));

        if(payment==="COD"){
            props.history.push('/order?pm=COD');
        }else{
            props.history.push('/order');
        }
        
    }
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
                                                <input type="radio" id="COD" name="payment" onChange={(e)=>setPayment(e.target.value)} checked value="COD"/>COD
                                            </label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <label className="radio-inline">
                                                <input type="radio" id="stripe" name="payment" onChange={(e)=>setPayment(e.target.value)}  value="stripe"/>Stripe
                                            </label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <label className="radio-inline">
                                                <input type="radio" id="paypal" name="payment" onChange={(e)=>setPayment(e.target.value)}  value="paypal"/>Paypal
                                            </label>
                                        </div>
                                    
                    
                                    </div>
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