import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';
import  axios from 'axios';
function HomeScreen(props) {

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
        <div>
          {loading? (
           <LoadingBox></LoadingBox>
          )
          : err ? (
            <MessageBox>{err}</MessageBox>
           )
          : (
            <div>
              <ol className="breadcrumb">
          <li className="active">Home</li>
          </ol>
          <div className="row center">
            {
            products.map(product => (
                <Product key={product.id_product} product={product} />
              ))
            }
          </div>
            </div>
          )
          }         
        </div>
    );
}

export default HomeScreen;