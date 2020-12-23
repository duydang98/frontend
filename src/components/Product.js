import React from 'react';
import {
  Link
} from "react-router-dom";
function product(props) {
    const {product} = props;

    return (
        <div>
            <div className="card">
                  <Link to={`/product/${product.id_product}`}>
                    <img className="medium" height={300} src={product.image} alt="product" />
                  </Link>
                  <div className="card-body">
                  <Link to={`/product/${product.id_product}`}>
                    <h2 className="card-title"> {product.name_product}</h2>
                  </Link>
                    <p  className="card-text">{product.unit_product}</p>
                    <div className="price">{product.price_product}đ</div>
                  </div>
              </div>
        </div>
    );
}

export default product;