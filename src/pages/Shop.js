import React, { useEffect } from 'react';
import Product from '../components/Product';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProduct } from '../actions/productAction';
function Shop(props) {
  
  const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const {loading,error,products} = productList;
    const keyword = props.location.search
    ? props.location.search.split('=')[1]
    : '';

    

    useEffect(()=>{
      dispatch(listProduct(keyword));
    },[dispatch,keyword]);

    return (
      
        <div id="content">
        <div className="newest">
          <div className="container">
          
            <div className="newest-content">
              <div className="newest-tab"> 
                
                <div id="myTabContent" className="tab-content">
                  <div role="tabpanel" className="tab-pane fade in active" id="1" aria-labelledby="cat-1">
                      <div className="row clearfix">
                      {loading? (
                            <LoadingBox></LoadingBox>
                            )
                            : error ? (
                                <MessageBox> {error}</MessageBox>
                            ):
                           (
                            
                            products.map(product => (
                                    <Product key={product.id_product} product={product} />
                                  ))
                                
                           )
                      
                      }
                          
                          
                      </div>
                  </div>
                  <nav>
                            <div className="pag-center">
                                <ul className="pagination believe-pag"> 
                                    <li className="active"><span>1</span></li>
                                    <li><a href="/">2</a></li>
                                    <li><a href="/">3</a></li>
                                    <li><a href="/">4</a></li>
                                </ul>
                            </div>
                        </nav>

                </div>
              </div>
            </div>
          </div>
        </div>     
      </div>
     
    );
}

export default Shop;