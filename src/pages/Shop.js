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

    let data = [];
    if(products){
      data = [...products];
    }
    data = data.filter((task) => {
      var name = removeVietnameseTones(task.name_product.toLowerCase());
      return name.indexOf(removeVietnameseTones(keyword.toLowerCase())) !== -1;
    });
    
    function removeVietnameseTones(str) {
      str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
      str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
      str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
      str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
      str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
      str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
      str = str.replace(/đ/g,"d");
      str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
      str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
      str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
      str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
      str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
      str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
      str = str.replace(/Đ/g, "D");
      // Some system encode vietnamese combining accent as individual utf-8 characters
      // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
      str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
      str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
      // Remove extra spaces
      // Bỏ các khoảng trắng liền nhau
      str = str.replace(/ + /g," ");
      str = str.trim();
      // Remove punctuations
      // Bỏ dấu câu, kí tự đặc biệt
      
      return str;
  }

    useEffect(()=>{
      dispatch(listProduct());
    },[dispatch]);

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
                            
                            data.map(product => (
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