import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allOrder, updateOrder } from '../../actions/orderAction';
import OrderItem from '../../components/admin/OrderItem';
function Order(props) {
  const orderAll = useSelector(state=>state.orderAll);
  const {orders} = orderAll;
  const [isEdit,setIsEdit] = useState(false);
  const [id,setId] = useState('');
  const [status,setStatus] = useState('');
  const dispatch = useDispatch();
  const onClose = ()=>{
    setIsEdit(false);
  }
  const onSubmit = async (e)=>{
    e.preventDefault();
    dispatch(updateOrder(id,{"status_order": status}));
    document.location.href = '/adminorder';

  }
  const onEdit = (order)=>{
    setIsEdit(true);
    setId(order.id_order);
    setStatus(order.status_order);
  }
 
  useEffect(()=>{
    dispatch(allOrder());
  },[dispatch])
    return (
        <div id="content">
        <div className="newest">
          <div className="container">
          <div className="text-center">
                <h1>Order Management</h1>
                <hr/>
            </div>
            <div className="newest-content">
              <div className="newest-tab"> 
                <div id="myTabContent" className="tab-content">
                  <div role="tabpanel" className="tab-pane fade in active" id="1" aria-labelledby="cat-1">
                      <div className="row clearfix">
                  {isEdit && (
                       <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                       <div className="panel panel-warning">
                           <div className="panel-heading">
                               <h3 className="panel-title">Update Order</h3>
                           </div>
                           <div className="panel-body">
                               <form onSubmit={onSubmit}>
                                   <div className="form-group">
                                       <label>ID</label>
                                       <input type="text"  value={id} className="form-control" />
                                   </div>
                                   <label>Status</label>
                        
                                   <select className="form-control" value={status} onChange={e=>setStatus(e.target.value)}  required="required">
                                       <option value="Pending">Pending</option>
                                       <option value="Awaiting Shipment">Awaiting Shipment</option>
                                       <option value="Shipped">Shipped</option>
                                       <option value="Completed">Completed</option>
                                       <option value="Cancelled">Cancelled</option>
                                      
                                   </select>
                                   <br/>
                                   <div className="text-center">
                                       <button type="submit" className="btn btn-warning">Save</button>&nbsp;
                                       <button onClick={onClose} className="btn btn-danger">Exit</button>
                                   </div>
                               </form>
                           </div>
                       </div>
                       </div>
                  )}
                     
                  
                     <div className={isEdit ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                       <div className="row mt-15">
                           <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                               <div className="table-responsive">
                               <table className="table table-bordered table-hover table-striped table-bordered">
                                   <thead>
                                       <tr>
                                           
                                           <th className="text-center">ID</th>
                                           <th className="text-center">STATUS</th>
                                           <th className="text-center">DATE</th>
                                           <th className="text-center">NAME</th>
                                           <th className="text-center">PHONE</th>
                                           <th className="text-center">ADDRESS</th>
                                           <th className="text-center">PAYMENT METHOD</th>
                                           <th className="text-center">PAYMENT_STATUS</th>
                                           <th className="text-center">DATE_PAYMENT</th>
                                           <th className="text-center">TRANPOST_FEE</th>
                                           <th className="text-center">TOTAL</th>
                                           <th className="text-center" >ACTION</th>
                                           
                                       </tr>
                                   </thead>
                                   <tbody>
                                       {orders && (
                                         orders.map(order=>(
                                           <OrderItem order={order} onEdit={onEdit} />
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
          </div>
        </div>     
      
    );
}

export default Order;