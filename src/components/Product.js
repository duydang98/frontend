import React from 'react';
import {
  Link
} from "react-router-dom";
function product(props) {
  const {product} = props;

  return (
  <div className="col-md-3 prdct-grid">
    <Link to={`/product/${product.id_product}`}>
    <div className="product-fade">
      <div className="product-fade-wrap">
        <div className="item" ><img src= {product.image} alt={product.image} className="img-responsive" /></div>
      </div>
    </div>
    </Link>
    <div className="product-name">
      <Link to={`/product/${product.id_product}`} > {product.name_product} </Link>
    </div>
    
      <div className="product-price">
      
       $ {product.price_product}
    </div>
  </div>);
}

export default product;