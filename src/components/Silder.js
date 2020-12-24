import React from 'react';

function Silder(props) {
    return (
        <div id="main-slider">
              <div id="home-slider" className="owl-carousel owl-theme">
                  <div className="item">
                      <img src="images/slider-1.jpg" alt="slide-1" className="img-responsive"/>
                      
                  </div>
                  <div className="item">
                      <img src="images/slider-2.jpg" alt="slide-2" className="img-responsive"/>
                  </div>
              </div>
          </div> 
    );
}

export default Silder;