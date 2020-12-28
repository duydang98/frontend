import React, {  useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../actions/cartAction';
import CheckOutStep from '../components/CheckOutStep';
function Shipping(props) {

    const cart = useSelector(state=> state.cart);
    const {cartItem,shippingAddress} = cart;
    
    const [name,setName] = useState(shippingAddress.name_recipient);
    const [phone,setPhone] = useState(shippingAddress.phone_recipient);
    const [address,setAddress] = useState(shippingAddress.address_recipient);

    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;

    
    // const [paymethod,setPaymethod] = useState('');
    
    const dispatch = useDispatch();
    const submitHandler = async (e)=>{
        e.preventDefault();

        const data = {
           "name_recipient": name,
           "phone_recipient": phone,
           "address_recipient": address
        };
        dispatch(saveShippingAddress(data));
        props.history.push('/payment');

        // await axios.post('/order/add',data ,{
        //     headers: {
        //         'x-access-token': userInfo.token
        //     }
        // });
        
        
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
       
    },[props.history,userInfo,cartItem])
    

    return (
        <div id="content">
        <div className="newest">
          <div className="container">
              <CheckOutStep step1  step2></CheckOutStep>
            <div className="newest-content">
              <div className="newest-tab"> 
                <div id="myTabContent" className="tab-content">
                  <div role="tabpanel" className="tab-pane fade in active" id="1" aria-labelledby="cat-1">
                      <div className="row clearfix">
                      <h2>Checkout Form</h2>
                      <form className="form-horizontal form-register" onSubmit={submitHandler}>
                           
                            <div className="form-group">
                                <label for="firstName" className="col-sm-3 control-label">Name </label>
                                <div className="col-sm-9">
                                    <input type="text" id="firstName" placeholder="Full Name" className="form-control" value={name} onChange={(e)=>setName(e.target.value)}  autofocus/>
                                    <span className="help-block">Ex: Đặng Phúc Duy,...</span>
                                </div>
                            </div>
                           
                            <div className="form-group">
                                <label for="phone" className="col-sm-3 control-label">Phone </label>
                                <div className="col-sm-9">
                                    <input type="text" id="phone" placeholder="Phone" value={phone} onChange={(e)=>setPhone(e.target.value)} className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="address" className="col-sm-3 control-label">Address </label>
                                <div className="col-sm-9">
                                    <input type="text" id="address" placeholder="Address" value={address} onChange={(e)=>setAddress(e.target.value)} className="form-control"/>
                                </div>
                            </div>

                            {/* <div className="form-group">
                                <label className="control-label col-sm-3">Payment Method</label>
                                <div className="col-sm-6">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <label className="radio-inline">
                                                <input type="radio" id="payRadio" name="payment" onChange={(e)=>setPaymethod(e.target.value)} value="COD"/>COD
                                            </label>
                                        </div>
                                        <div className="col-sm-4">
                                            <label className="radio-inline">
                                                <input type="radio" id="payRadio" name="payment" onChange={(e)=>setPaymethod(e.target.value)} value="stripe"/>Stripe
                                            </label>
                                        </div>
                                        <div className="col-sm-4">
                                            <label className="radio-inline">
                                                <input type="radio" id="payRadio" name="payment" onChange={(e)=>setPaymethod(e.target.value)} value="paypal"/>Paypal
                                            </label>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>  */}
                            
                           
                            
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

export default Shipping;