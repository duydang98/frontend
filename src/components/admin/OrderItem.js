import React from 'react';
import { useDispatch } from 'react-redux';
import { refundOrder } from '../../actions/orderAction';

function OrderItem(props) {
    const {order,onEdit} = props;
    const dispatch = useDispatch();
    const onEditStatus = ()=>{
        onEdit(order);
    }
    const onRefund = ()=>{
        dispatch(refundOrder(order.id_order));
        document.location.href = '/adminorder';
    }
    return (
        <tr>
            <td>{order.id_order}</td>
            <td>{order.status_order}</td>
            <td>{order.date_create_order}</td>
            <td>{order.name_recipient}</td>
            <td>{order.phone_recipient}</td>
            <td>{order.address_recipient}</td>
            <td>{order.payment_method}</td>
            <td>{order.payment_status}</td>
            <td>{order.date_payment}</td>
            <td>{order.tranpost_fee}$</td>
            <td>{order.total_amount}$</td>
            <td >
                    <button type="button" className="btn btn-success"  onClick={onEditStatus}>
                    <span className="fa fa-pencil mr-5"> </span>   Edit
                    </button>
                    <button type="button" className="btn btn-warning" onClick={onRefund}>
                    <span className="fa fa-exchange"></span>Refund
                    </button>
            </td>
        </tr>
    );
}

export default OrderItem;