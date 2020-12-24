import React from 'react';
import {
    Link
  } from "react-router-dom";
function TopMenu(props) {
    return (
      <div id="header">
      <div className="top">
        <div className="container">
          <ul className="top-support">
            <li><i className="fa fa-phone-square"></i><span>0123456789</span></li>
            <li><a href="/"><i className="fa fa-envelope-square"></i><span>duydang363@gmail.com</span></a></li>
          </ul>
          <div className="top-control">
            <a href="/">Track Order</a><span>•</span><a href="/">Register</a><span>•</span><a href="/">Login</a>
          </div>
          <div className="clearfix"></div>
          <div className="top-offers show-mobile">
          
          </div>
        </div>
      </div>
      <div id="believe-nav">
        <div className="container">
          <div className="min-marg">
            <nav className="navbar navbar-default">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="index.html"><img src="images/logo2.png" alt="" /></a>
              </div>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li className="active"><a href="/">Home <span className="sr-only">(current)</span></a></li>
                  <li><Link to="/product">Shop</Link></li>
                  <li><a href="blog.html">Blog</a></li>
                  <li><a href="blog-detail.html">Blog Post</a></li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li className="menu-search-form">
                    <a  href="/" id="open-srch-form"> <img src="https://res.cloudinary.com/dnnkamj1s/image/upload/v1608820015/Images/srch_qxbn9l.png" alt="srch" /></a>
                  </li>
                  <li><a href="/"><img src="https://res.cloudinary.com/dnnkamj1s/image/upload/v1608820015/Images/pav_lqzte3.png" alt="pav" /><span>2</span></a></li>
                  <li><a href="/"><img src="https://res.cloudinary.com/dnnkamj1s/image/upload/v1608820015/Images/bag_spvr5h.png" alt="bag" /><span>2</span></a></li>
                  <li id="open-srch-form-mod">
                    <div>
                      <form className="side-search">
                        <div className="input-group">
                          <input type="text" className="form-control search-wid" placeholder="Search Here" aria-describedby="basic-addon1" />
                          <a href="/" className="input-group-addon btn-side-serach" id="basic-addon1"><i className="fa fa-search"></i></a>
                        </div>
                      </form>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="srch-form">
            <form className="side-search">
              <div className="input-group">
                <input type="text" className="form-control search-wid" placeholder="Search Here" aria-describedby="basic-addon2" />
                <a href="/" className="input-group-addon btn-side-serach" id="basic-addon2"><i className="fa fa-search"></i></a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div> 
    );
}

export default TopMenu;