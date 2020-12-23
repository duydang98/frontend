import React from 'react';
import {
    Link
} from "react-router-dom";
import data from '../data';
function ProductScreen(props) {
    const product = data.products.find(x => (
        x._id === props.match.params.id
    ));
    if (!product) return <h1>Product Not Found</h1>

    return (
        <div>
            <ol class="breadcrumb">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li class="active">Product Detail</li>
            </ol>

            <div className="row">

                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <img src={product.image} className="large"  width={500} alt={product.name} />
                </div>

                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                   <div className="box">
                   <div className="card" >
                        <div className="card-header">
                            Detail
                        </div>
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Tên sản phẩm: {product.name}</li>
                                    <li className="list-group-item"> Giá:  {product.price} đ</li>
                                    <li className="list-group-item"> Loại:  {product.unit_product}</li>
                            </ul>
                        </div> 
                    </div>
                   </div>
                </div>

                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div className="card" >
                        <div className="card-body">
                        <ul className="list-group list-group-flush">
                                <li className="list-group-item">
    
                                    <div className="row">
                                        <div>Price</div>
                                        <div>{product.price} đ</div>
                                    </div>
                                   
                                </li>
                                <li className="list-group-item">
                                <div className="row">
                                        <div>Area</div>
                                        <div>
                                        <select className="custom-select" id="inputGroupSelect01">
                                            <option selected>Choose...</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                        </div>
                                </div>
                                </li>
                        </ul>
                        <p className="text-center buttons"><a href="/" className="btn btn-primary">Add to card</a></p>
                        
                        </div> 
                    </div>
                </div>
            </div>
            <div className="row">

                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="card" >
                        <div className="card-header">
                        <h2>Description</h2>
                        </div>
                        <div className="card-body">
                            <p>{product.description}</p>
                        </div> 
                    </div>
                    
                    
                </div>


            </div>
        </div>
    );
}

export default ProductScreen;