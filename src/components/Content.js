import React from 'react';

function Content(props) {
    return (
        <div id="content">
        <div className="newest">
          <div className="container">
            <div className="newest-content">
              <div className="newest-tab"> 
                <div id="myTabContent" className="tab-content">
                  <div role="tabpanel" className="tab-pane fade in active" id="1" aria-labelledby="cat-1">
                      <div className="row clearfix">
        
                        {props.children}
                     
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

export default Content;