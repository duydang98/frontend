import React from 'react';

function OrderItem(props) {
    const {order,onEdit} = props;

    const onEditStatus = ()=>{
        onEdit(order);
    }
    return (
        <tr>
            <td>{order.id_order}</td>
            <td>{order.status_order}</td>
            <td>{order.date_create_order}</td>
            <td>{order.name_recipient}</td>
            <td>{order.phone_recipient}</td>
            <td>{order.address_recipient}</td>
            <td>{order.tranpost_fee}</td>
            <td>{order.total_amount}</td>
            <td className="text-center">
                    <button type="button" className="btn btn-warning"  onClick={onEditStatus}>
                    <span className="fa fa-pencil mr-5"></span>Edit
                    </button>
            </td>
        </tr>
    );
}

export default OrderItem;