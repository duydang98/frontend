import React from 'react';

function CheckOutStep(props) {
    return (
        <div className="row checkout-steps">
            <div className={props.step1 ? 'active col-xs-3 col-sm-3 col-md-3 col-lg-3' : 'col-xs-3 col-sm-3 col-md-3 col-lg-3'}>Sign-In</div>
            <div className={props.step2 ? 'active col-xs-3 col-sm-3 col-md-3 col-lg-3' : 'col-xs-3 col-sm-3 col-md-3 col-lg-3'}>Shipping</div>
            <div className={props.step3 ? 'active col-xs-3 col-sm-3 col-md-3 col-lg-3' : 'col-xs-3 col-sm-3 col-md-3 col-lg-3'}>Payment</div>
            <div className={props.step4 ? 'active col-xs-3 col-sm-3 col-md-3 col-lg-3' : 'col-xs-3 col-sm-3 col-md-3 col-lg-3'}>Place Order</div>
        </div>
    );
}

export default CheckOutStep;