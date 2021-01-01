import React from 'react';

function Product(props) {
    return (
        <div id="content">
        <div className="newest">
          <div className="container">
          <div className="text-center">
            <h1>Product Management</h1>
            <hr/>
        </div>
            <div className="newest-content">
              <div className="newest-tab"> 
                <div id="myTabContent" className="tab-content">
                  <div role="tabpanel" className="tab-pane fade in active" id="1" aria-labelledby="cat-1">
                      <div className="row clearfix">
        
                      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <div className="panel panel-warning">
                                <div className="panel-heading">
                                    <h3 class="panel-title">Add Product</h3>
                                </div>
                                <div className="panel-body">
                                    <form>
                                        <div className="form-group">
                                            <label>Tên :</label>
                                            <input type="text" class="form-control" />
                                        </div>
                                        <label>Trạng Thái :</label>
                                        <select className="form-control" required="required">
                                            <option value="1">Kích Hoạt</option>
                                            <option value="0">Ẩn</option>
                                        </select>
                                        <br/>
                                        <div className="text-center">
                                            <button type="submit" class="btn btn-warning">Thêm</button>&nbsp;
                                            <button type="submit" class="btn btn-danger">Hủy Bỏ</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                       
                            <div class="row mt-15">
                                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                    < button type="button" class="btn btn-primary">
                                            <span class="fa fa-plus mr-5"></span>Add Product
                                        </button>
                                    </div>
                                <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="Nhập từ khóa..." />
                                        <span class="input-group-btn">
                                                    <button class="btn btn-primary" type="button">
                                                        <span class="fa fa-search mr-5"></span>Tìm
                                        </button>
                                        </span>
                                    </div>
                                </div>
                            
                            </div>
                            <div className="row mt-15">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div className="table-responsive">
                                    <table className="table table-bordered table-hover table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                <th className="text-center">STT</th>
                                                <th className="text-center">Tên</th>
                                                <th className="text-center">Trạng Thái</th>
                                                <th className="text-center">Hành Động</th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Học lập trình</td>
                                                <td className="text-center">
                                                    <span className="label label-success">
                                                                Kích Hoạt
                                                            </span>
                                                </td>
                                                <td className="text-center">
                                                    <button type="button" className="btn btn-warning">
                                                        <span className="fa fa-pencil mr-5"></span>Sửa
                                                    </button>
                                                    &nbsp;
                                                    <button type="button" className="btn btn-danger">
                                                        <span className="fa fa-trash mr-5"></span>Xóa
                                                    </button>
                                                </td>
                                            </tr>
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