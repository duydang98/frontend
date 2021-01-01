import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteStock } from '../../actions/stockAction';

function StockItem(props) {
    const dispatch = useDispatch();
    const {stock,onISEdit} = props;
    const onEdit = ()=>{
        onISEdit(stock);
    }
    const onDelete = ()=>{
        dispatch(deleteStock(stock.id_product,stock.id_area));
        document.location.href = '/adminstock';
    }
    return (
        <tr>
                                                        <td>{stock.product.name_product}</td>
                                                        <td>{stock.area.name_area}</td>
                                                        <td>{stock.quantity_stock}</td>
                                                    
                                                        
                                                        <td className="text-center">
                                                            <button type="button" className="btn btn-warning" onClick={onEdit}>
                                                                <span className="fa fa-pencil mr-5"></span>Sửa
                                                            </button>
                                                            &nbsp;
                                                            <button type="button" className="btn btn-danger" onClick={onDelete}>
                                                                <span className="fa fa-trash mr-5"></span>Xóa
                                                            </button>
                                                        </td>
                                                    </tr>
    );
}

export default StockItem;