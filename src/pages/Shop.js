import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';
import  axios from 'axios';
import {
    Link
  } from "react-router-dom";
function Shop(props) {
    const [products,setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(false);
  
    useEffect(()=>{
      const fecthData = async ()=>{
        try {
          setLoading(true);
          const {data} = await axios.get('/product');
          setLoading(false);
          setProducts(data);
        } catch (error) {
          setErr(error.message);
          setLoading(false);
        }
        
      }
      fecthData();
  
    },[]);
    return (
        <div id="content">
        <div className="newest">
          <div className="container">
          <ol class="breadcrumb">
                <li>
                    <a href="/">Home</a>
                </li>
                <li class="active">Shop</li>
            </ol>
            <div className="newest-content">
              <div className="newest-tab"> 
                
                <div id="myTabContent" className="tab-content">
                  <div role="tabpanel" className="tab-pane fade in active" id="1" aria-labelledby="cat-1">
                      <div className="row clearfix">
                      {loading? (
                            <LoadingBox></LoadingBox>
                            )
                            : err ? (
                                <MessageBox>{err}</MessageBox>
                            ):
                           (
                            
                                products.map(product => (
                                    <Product key={product.id_product} product={product} />
                                  ))
                                
                           )
                      
                      }
                          
                     
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

export default Shop;