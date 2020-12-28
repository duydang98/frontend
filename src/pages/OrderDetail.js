import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailOrder } from '../actions/orderAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

function OrderDetail(props) {
    const id_order = props.match.params.id;
    const orderDetail = useSelector(state=>state.orderDetail);
    const {loading , error , order} = orderDetail;
    const data = {...order};
    
    const stock = (id_area)=>{
        if(id_area===1){
            return "TP Hồ Chí Minh";
        }
        if(id_area===2){
            return "TP Cần Thơ";
        }
        if(id_area===3){
            return "Đà Lạt";
        }
        

    }
    
    const date = (string_date) =>{
        return string_date.split("-").reverse().join("-");
    };
    if(data.date_create_order){
        data.date_create_order = date(data.date_create_order);
    }
    
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(detailOrder(id_order));
    },[dispatch,id_order]);
    return (
        <div id="content">
        <div className="newest">
          <div className="container">
            <div className="newest-content">
              <div className="newest-tab"> 
                <div id="myTabContent" className="tab-content">
                  <div role="tabpanel" className="tab-pane fade in active" id="1" aria-labelledby="cat-1">
                      <div className="row clearfix">
                            
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <div className="panel panel-primary">
                                        <div className="panel-heading pn-order" >
                                                <h3 className="panel-title">

                                                    <i className="fa fa-book fa-fw"></i> Order Detail with id {id_order}

                                                </h3>
                                        </div>
                                        <div class="table-responsive">
                                            <table class="table table-hover table-striped table-bordered">
                                                <tbody>
                                                  
                                                <tr> <td>ID Order: </td> <td> {data.id_order}</td> </tr> 
                                                <tr> <td>Status: </td> <td>  {data.status_order}</td> </tr> 
                                                <tr> <td>Date: </td> <td>  {data.date_create_order}</td> </tr> 
                                                <tr> <td>Name Recipient: </td> <td> {data.name_recipient} </td> </tr> 
                                                <tr> <td>Phone: </td> <td>   {data.phone_recipient}</td> </tr> 
                                                <tr> <td>Address: </td> <td>   {data.address_recipient}</td> </tr> 
                                                <tr> <td>Totel: </td> <td>   {data.total_amount}$</td> </tr> 
                                                <tr> <td>Transpost Fee: </td> <td>  {data.tranpost_fee}$</td> </tr> 
                                                <tr> <td>Payment Method: </td> <td>  {data.payment_method}</td> </tr>  
                                                <tr> <td>Payment Status: </td> <td>  {data.payment_status}</td> </tr>  
                                                <tr> <td>Date Payment: </td> <td>   {data.date_payment}</td> </tr> 

                                                </tbody>
                                            </table>
                                    </div>
                                </div>
                            </div>
                            
                           
                            
                      </div>
                      
                      <div class="row clearfix">
                      <div className="panel panel-primary">
                                    <div className="panel-heading pn-order" >
                                            <h3 className="panel-title">

                                                <i className="fa fa-book fa-fw"></i> Order Items with id order {id_order}

                                            </h3>
                                        </div>
                                        <div class="table-responsive">
                                        <table class="table table-hover table-striped table-bordered">
                                            <thead>
                                                <tr>
                                                    <th> ID Product:</th>
                                                    <th> Name Product: </th>
                                                    <th> Quantity </th>
                                            
                                                    <th> Price: </th>
                                            
                                                    <th> Stock: </th>
                                                    <th> Promotion: </th>
                                                    <th>Amount: </th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                            {loading? (
                                                    <LoadingBox></LoadingBox>
                                                    )
                                                    : error ? (
                                                        <MessageBox> {error}</MessageBox>
                                                    ):
                                                    ( 
                                                        order.order_items.map(order_item=>(
                                                            <tr key={order_item.id_product}>
                                                            <td> {order_item.id_product}</td>
                                                            <td> {order_item.name_product} </td>
                                                            <td> {order_item.quantity_product}</td>
                                                            
                                                            <td> {order_item.price_product}$ </td>
                                                           
                                                            <td> {stock(order_item.id_area)} </td>
                                                            <td> {order_item.id_promotion} </td>
                                                            <td>{order_item.amount}$ </td>
        
                                                        </tr>
                                                        ))
                                                    )}
                                               

                                            </tbody>
                                        </table>
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

export default OrderDetail;