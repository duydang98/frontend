import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartAction';

function CartItem(props) {
    const {item} = props;
    // const [qty,setQty] = useState(item.qty);
    const dispatch = useDispatch();

    const removeCartItem = (id_product) =>{
           dispatch(removeFromCart(id_product));
    }
    let area = "TP Hồ Chí Minh";
    if(item.id_area===2){
        area = "TP Cần Thơ";
    }
    if(item.id_area===3){
        area = "Đà Lạt";
    }

    return (
        <div className="row cart-it">
            <div className="col-xs-2"><img className="img-responsive img-cart" src={item.image} alt={item.id_product} />
            </div>
            <div className="col-xs-3">
                <h4 className="product-name"><strong>{item.name_product}</strong></h4><h4><small>Unit: {item.unit_product}</small></h4>
            </div>
            <div className="col-xs-3">
                <h4 className="product-name"><strong>{area}</strong></h4><h4><small>Area Stock</small></h4>
            </div>
            <div className="col-xs-4 cart-it-1">
                <div className="col-xs-6 text-right">
                    <h6><strong> {item.price_product} <span className="text-muted"> x</span></strong></h6>
                </div>
                <div className="col-xs-4">
                    <input type="number" className="form-control input-sm" value={item.quantity_product} min={1}
                    
                    onChange={(e) =>
                        dispatch(
                          addToCart(item.id_product,item.id_area,parseInt(e.target.value))
                        )
                      }
                    />
                </div>
                <div className="col-xs-2">
                    <button type="button" 
                        className="btn btn-link btn-xs"
                        onClick={()=>removeCartItem(item.id_product)}

                    >
                        <span className="glyphicon glyphicon-trash"> </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;