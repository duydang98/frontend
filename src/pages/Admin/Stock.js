import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProduct } from '../../actions/productAction';
import { addStock, listStock, updateStock } from '../../actions/stockAction';
import StockItem from '../../components/admin/StockItem';
function Stock(props) {
    const stockList = useSelector(state=>state.stockList);
    const {stocks} = stockList;
    const productList = useSelector((state) => state.productList);
    const {products} = productList;
    const dispatch = useDispatch();
    const [isAdd,setIsAdd] = useState(false);
    const [isEdit,setIsEdit] = useState(false);
    const [idproduct,setIdproduct] = useState(1);
    const [idarea,setIdarea] = useState(1);
    const [quantity,setQuantity] = useState(0);
    
    const onIsAdd = ()=>{
        setIsAdd(!isAdd);
        setIsEdit(false);
        setQuantity('');

    }
    const onISEdit = (stock)=>{
        setIsAdd(!isAdd);
        setIsEdit(true);
        setIdproduct(stock.id_product);
        setIdarea(stock.id_area);
        setQuantity(stock.quantity_stock);
    }
    const onSave = (e)=>{
        e.preventDefault();
        const data = {
            "id_product":idproduct,
            "id_area":idarea,
            "quantity_stock":quantity
        }
        if(!isEdit){
            dispatch(addStock(data));
        }else{
            dispatch(updateStock(idproduct,idarea,{"quantity_stock": quantity}));
        }
       
        document.location.href = '/adminstock';
    }

    useEffect(()=>{
        dispatch(listStock());
        dispatch(listProduct(''));
    },[dispatch]);
    return (
        <div id="content">
        <div className="newest">
          <div className="container">
          <div className="text-center">
                <h1>Stock Management</h1>
                <hr/>
            </div>
            <div className="newest-content">
              <div className="newest-tab"> 
                <div id="myTabContent" className="tab-content">
                  <div role="tabpanel" className="tab-pane fade in active" id="1" aria-labelledby="cat-1">
                      <div className="row clearfix">
                        {isAdd && (
                                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                <div className="panel panel-warning">
                                    <div className="panel-heading">
                                        <h3 class="panel-title">{isEdit ? "Update Stock": "Add Stock"}</h3>
                                    </div>
                                    <div className="panel-body">
                                        <form className="form-horizontal" onSubmit={onSave}>
                                        <label>Product :</label>
                                            <select className="form-control" value={idproduct} onChange={e=>setIdproduct(e.target.value)} required="required">
                                                {products && (
                                                    products.map(product=>(
                                                        <option value={product.id_product}>{product.name_product} </option>
                                                    ))
                                                )}
                                                
                                                
                                            </select>
                                            <label>Area :</label>
                                            <select className="form-control" required="required" value={idarea} onChange={e=>setIdarea(e.target.value)} >
                                                <option value={1}>TP Hồ Chí Minh</option>
                                                <option value={2}>TP Cần Thơ</option>
                                                <option value={3}>Đà Lạt</option>
                                            </select>
                                            <br/>
                                            <div className="form-group">
                                                <label >Quantity:</label>
                                                <input type="text" class="form-control" value={quantity} onChange={e=>setQuantity(e.target.value)}  />
                                            </div>
                                            <div className="text-center">
                                                <button type="submit" class="btn btn-warning">Save</button>&nbsp;
                                                <button  onClick={onIsAdd} class="btn btn-danger">Exit</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        )}
                      
                         <div className={!isAdd? "col-xs-12 col-sm-12 col-md-12 col-lg-12" : "col-xs-8 col-sm-8 col-md-8 col-lg-8"}>
                       
                            <div className="row mt-15">
                                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                        < button type="button" class="btn btn-primary" onClick={onIsAdd} >
                                                <span className="fa fa-plus mr-5"></span>Add Stock
                                            </button>
                                    </div>
                               
                            
                            </div>
                            <div className="row mt-15">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div className="table-responsive">
                                    <table className="table table-bordered table-hover table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                
                                                <th className="text-center">NAME PRODUCT</th>
                                               
                                                <th className="text-center">NAME AREA</th>
                                                <th className="text-center">QUANTITY</th>
                                                <th className="text-center">ACTION</th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {stocks && (
                                                stocks.map(stock=>(
                                                    <StockItem onISEdit={onISEdit} stock={stock} />
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

export default Stock;