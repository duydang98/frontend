import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../actions/productAction';

function ProductItem(props) {
    const {product,onEditProduct} = props;
    const dispatch = useDispatch();
    const onDeleteProduct = ()=>{
        dispatch(deleteProduct(product.id_product));
        document.location.href ='/adminproduct';
    }
    const onEditProductItem = ()=>{
        
        onEditProduct(product);
    }
    return (
        
            <tr>
                <td>{product.id_product}</td>
                <td>{product.name_product}</td>
                <td>{product.price_product}</td>
                <td>{product.unit_product}</td>
                <td><img src={product.image} className="img-comment" alt="" /></td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning" onClick={onEditProductItem} >
                        <span className="fa fa-pencil mr-5"></span>Sửa
                                                            </button>
                                                            &nbsp;
                                                            <button type="button" className="btn btn-danger" onClick={onDeleteProduct}>
                        <span className="fa fa-trash mr-5"></span>Xóa
                                                            </button>
                </td>
            </tr>
     
    );
}

export default ProductItem;