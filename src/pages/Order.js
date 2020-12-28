import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listOrder } from '../actions/orderAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

function Order(props) {
  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;
  const orderList = useSelector(state=> state.orderList);
  const {loading, error, orders} = orderList;
  const dispatch = useDispatch();
  console.log(orders);
  useEffect(()=>{
    if(!userInfo){
      props.history.push('/signin');
    }
    dispatch(listOrder());
  },[dispatch,props.history,userInfo])
    return (
        <div id="content">
         <div className="newest">
          <div className="container">
            <div className="newest-content">
              <div className="newest-tab"> 
                <div id="myTabContent" className="tab-content">
                  <div role="tabpanel" className="tab-pane fade in active" id="1" aria-labelledby="cat-1">
                      <div className="row clearfix">

                    <div className="col-lg-12">
                      <div className="panel panel-primary">
                      <div className="panel-heading pn-order" >
                            <h3 className="panel-title">

                                <i className="fa fa-book fa-fw"></i> Orders of {userInfo.name_user}

                            </h3>
                        </div>
                        <div class="table-responsive">
                          <table class="table table-hover table-striped table-bordered">
                              <thead>
                                  <tr>
                                      <th> ID Order:</th>
                                      <th> Status: </th>
                                      <th> Name Recipient: </th>
                                      <th> Date: </th>
                                      <th> Address: </th>
                                      <th> Total: </th>
                                      <th> Payment Method: </th>
                                      <th> Detail: </th>
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
                                    
                                        orders.map(order => (
                                          <tr>
                                          <td> {order.id_order} </td>
                                          <td> {order.status_order}</td>
                                          <td> {order.name_recipient} </td>
                                          <td>  {order.date_create_order} </td>
                                          <td> {order.address_recipient} </td>
                                          
                                          <td> {order.total_amount}$</td>
                                          <td> {order.payment_method} </td>
                                          <td>
                                            <Link to={`/order_detail/${order.id_order}`} class='btn btn-primary btn-sm'> Chi tiết </Link>
                                          </td>
                                      </tr>
                                          ))
                                        
                                  )
                              
                              }
                                    
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
      </div>
    );
}

export default Order;