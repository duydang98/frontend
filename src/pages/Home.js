import React from 'react';
import Product from '../components/Product';
import Silder from '../components/Silder'; 
function Home(props) {
    return (
        <div>
        <Silder/>
        <div id="content">
        <div className="newest">
          <div className="container">
            <div className="newest-content">
              <div className="newest-tab"> 
                <ul id="myTab" className="nav nav-tabs newest" role="tablist">
                    <li role="presentation" className="active">
                        <h1> New Product</h1>
                    </li>
                </ul>
                <div id="myTabContent" className="tab-content">
                  <div role="tabpanel" className="tab-pane fade in active" id="1" aria-labelledby="cat-1">
                      <div className="row clearfix">
                          
                     
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

export default Home;