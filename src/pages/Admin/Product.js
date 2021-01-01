import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, listProduct, updateProduct } from '../../actions/productAction';
import LoadingBox from '../../components/LoadingBox';
import MessageBox from '../../components/MessageBox';
import ProductItem from '../../components/admin/ProductItem';
function Product(props) {
    const [isaddproduct,setIsaddproduct] = useState(false);
    const [isedit,setIsedit] = useState(false);
    const [name,setName]=useState('');
    const [price,setPrice]=useState('');
    const [unit,setUnit]=useState('');
    const [description,setDescription]=useState('');
    const [image,setImage]=useState();
    const [idupdate,setIdupdate] = useState('');
    const [keyword,setKeyword] = useState('');
    const dispatch = useDispatch();
  

    const onIsAddProduct = ()=>{
        setIsaddproduct(!isaddproduct);
        setIsedit(false);
        setName('');
        setPrice('');
        setUnit('');
        setDescription('');
    }
    const onEditProduct = (product)=>{
        console.log(product);
        setIsedit(true);
        setIsaddproduct(true);
        setIdupdate(product.id_product);
        setName(product.name_product);
        setPrice(product.price_product);
        setUnit(product.unit_product);
        setDescription(product.description_product);
    }

    const onAddProduct = async (e)=>{
        e.preventDefault();
        const data = new FormData();
        data.append("name_product",name);
        data.append("price_product",price);
        data.append("unit_product",unit);
        data.append("description_product",description);
       
        if(image){
            data.append("image",image);
        }
        if(!isedit){
            dispatch(addProduct(data));
        }else{
            dispatch(updateProduct(idupdate,data));
        }
        
        document.location.href ='/adminproduct';
        
    }

    const productList = useSelector((state) => state.productList);
    const {loading,error,products} = productList;

    useEffect(()=>{
        dispatch(listProduct(keyword));
      },[dispatch,keyword]);

    return (
        <div id="content">
        <div className="newest">
          <div className="container">
            {
                loading && (<LoadingBox></LoadingBox>) 
            }
            {
                error && <MessageBox> {error}</MessageBox>
            }
            <div className="text-center">
                <h1>Product Management</h1>
                <hr/>
            </div>
            <div className="newest-content">
              <div className="newest-tab"> 
                <div id="myTabContent" className="tab-content">
                  <div role="tabpanel" className="tab-pane fade in active" id="1" aria-labelledby="cat-1">
                      <div className="row clearfix">
                        {isaddproduct && (
                             <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                             <div className="panel panel-warning">
                                 <div className="panel-heading">
                                     <h3 class="panel-title"> {isedit? "Edit Product" : " Add Product"}</h3>
                                 </div>
                                 <div className="panel-body">
                                     <form className="form-horizontal" onSubmit={onAddProduct}>
                                         <div className="form-group">
                                             <label  className="col-sm-3 control-label">Name :</label>
                                             <div className="col-sm-9">
                                             <input type="text" class="form-control" value={name} onChange={(e)=>setName(e.target.value)} />
                                             </div>
                                             
                                         </div>
                                         <div className="form-group">
                                             <label  className="col-sm-3 control-label">Price :</label>
                                             <div className="col-sm-9">
                                             <input type="text" class="form-control" value={price} onChange={(e)=>setPrice(e.target.value)} />
                                             </div>
                                             
                                         </div>
                                         <div className="form-group">
                                             <label  className="col-sm-3 control-label">Unit :</label>
                                             <div className="col-sm-9">
                                             <input type="text" class="form-control" value={unit} onChange={(e)=>setUnit(e.target.value)} />
                                             </div>
                                             
                                         </div>
                                         <div className="form-group">
                                             <label  className="col-sm-3 control-label">Desription:</label>
                                             <div className="col-sm-9">
                                             <input type="text" class="form-control" value={description} onChange={(e)=>setDescription(e.target.value)} />
                                             </div>
                                             
                                         </div>
                                         <div className="form-group">
                                             <label  className="col-sm-3 control-label">Image :</label>
                                             <div className="col-sm-9">
                                             <input type="file" class="form-control" 
                                              onChange={e=>{
                                                const file = e.target.files[0];
                                                setImage(file);
                                            }} />
                                             </div>
                                             
                                         </div>
                                         <div className="text-center">
                                             <button type="submit" class="btn btn-warning">SAVE</button>&nbsp;
                                             <button onClick={onIsAddProduct} class="btn btn-danger">Exit</button>
                                         </div>
                                     </form>
                                 </div>
                             </div>
                         </div>
                        )}
                     

                        <div className={!isaddproduct? "col-xs-12 col-sm-12 col-md-12 col-lg-12" : "col-xs-8 col-sm-8 col-md-8 col-lg-8"}>
                       
                            <div className="row mt-15">
                                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                        < button type="button" class="btn btn-primary" onClick={onIsAddProduct}>
                                                <span className="fa fa-plus mr-5"></span>Add Product
                                            </button>
                                    </div>
                                <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                                    <div className="input-group">
                                        <input type="text" class="form-control" onChange={e=> setKeyword(e.target.value)} placeholder="Nhập từ khóa..." />
                                    </div>
                                </div>
                            
                            </div>
                            <div className="row mt-15">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div className="table-responsive">
                                    <table className="table table-bordered table-hover table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                <th className="text-center">ID</th>
                                                <th className="text-center">NAME</th>
                                                <th className="text-center">PRICE</th>
                                                <th className="text-center">UNIT</th>
                                                <th className="text-center">IMAGE</th>
                                                <th className="text-center">ACTION</th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {products && (
                                                products.map(product=>(
                                                    <ProductItem product={product} onEditProduct={onEditProduct} />
                                                ))
                                            )}
                                            
                                        </tbody>
                                    </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                     
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

export default Product;