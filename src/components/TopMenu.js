import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {signout} from '../actions/userAction';
import classNames from 'classnames';
import {
    Link, useLocation
  } from "react-router-dom";
function TopMenu(props) {
    const cart = useSelector( state=> state.cart);
    const {cartItem} = cart;
    const userSignin = useSelector(state => state.userSignin);
    const {userInfo} = userSignin;
    const location = useLocation();
    const [keyword,setKeyword] = useState('');
    const dispatch = useDispatch();
    const signoutHandler = ()=>{
        dispatch(signout());
    }
 
    return (
      <div id="header">
      <div className="top">
        <div className="container">
          <ul className="top-support">
            <li><i className="fa fa-phone-square"></i><span>0123456789</span></li>
            <li><a href="/"><i className="fa fa-envelope-square"></i><span>duydang363@gmail.com</span></a></li>
          </ul>
          <div className="top-control">
            {userInfo ? (
                // <Link to="/signin">{userInfo.name_user}</Link>
               
                <div className="btn-group">
                <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {userInfo.name_user}
                </button>
                <div className="dropdown-menu">
                  <Link className="dropdown-item menu-acc" to="/">My Profile</Link>
                  <Link className="dropdown-item menu-acc" to="/my_order">My Order</Link>
                  <Link className="dropdown-item menu-acc" to="#signout" onClick={signoutHandler}>Signout</Link>
                </div>
              </div>
            ):(
              <div className="btn-group">
                
                  <button type="button" className="btn btn-secondary dropdown-toggle glyphicon glyphicon-user" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Account
                  </button>
                  <div className="dropdown-menu">
                  <Link className="dropdown-item menu-acc"to="/signin">Signin</Link>
                  <Link className="dropdown-item menu-acc" to="/register">Register</Link>
                
                  </div>
                  
              </div>
            )}
              {userInfo && (
                  userInfo.isAdmin && 
                    <span> </span>
                  )}
              {userInfo && (
                  userInfo.isAdmin && 
                  
                  <div className="btn-group">
                  <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Admin
                  </button>
                  <div className="dropdown-menu">
                    <Link className="dropdown-item menu-acc" to="/">Dashboad</Link>
                    <Link className="dropdown-item menu-acc" to="/">Track Order</Link>
                    <Link className="dropdown-item menu-acc" to="#signout" onClick={signoutHandler}>Signout</Link>
                  </div>
                </div>
              )}
              
             
             
            
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
                <a className="navbar-brand" href="/"><img src="images/logo2.png" alt="" /></a>
              </div>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li  className={classNames({active: location.pathname ==='/'})}  ><a href="/">Home <span className="sr-only">(current)</span></a></li>
                  <li  className={classNames({active: location.pathname ==='/product'})}><Link to="/product">Shop</Link></li>
                  <li  className={classNames({active: location.pathname ==='/blog'})}><Link to="/blog">Blog</Link></li>
                  <li><a href="blog-detail.html">Blog Post</a></li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li className="menu-search-form">
                  <Link to="#" id="open-srch-form"><img src="https://res.cloudinary.com/dnnkamj1s/image/upload/v1608820015/Images/srch_qxbn9l.png" alt="srch" /></Link>
                  </li>
                  <li><Link to="/"><img src="https://res.cloudinary.com/dnnkamj1s/image/upload/v1608820015/Images/pav_lqzte3.png" alt="pav" /><span>2</span></Link></li>
                  <li><Link to="/cart"><img src="https://res.cloudinary.com/dnnkamj1s/image/upload/v1608820015/Images/bag_spvr5h.png" alt="bag" /> {cartItem.length >0 &&  <span>{cartItem.length}</span>}</Link></li>
                  <li id="open-srch-form-mod">
                    <div>
                      <form className="side-search" >
                        <div className="input-group">
                          <input type="text" className="form-control search-wid"  onChange={e=>setKeyword(e.target.value)} placeholder="Search Here" aria-describedby="basic-addon1" />
                          <Link to={`/product?search=${keyword}`} className="input-group-addon btn-side-serach" id="basic-addon1"><i className="fa fa-search"></i></Link>
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
                <input type="text" className="form-control search-wid" onChange={e=>setKeyword(e.target.value)} placeholder="Search Here" aria-describedby="basic-addon2" />
                <Link to={`/product?search=${keyword}`} className="input-group-addon btn-side-serach" id="basic-addon2"><i className="fa fa-search"></i></Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div id="cat-nav">
              <div className="container">
                  <nav className="navbar navbar-default">
                     
                      <div className="navbar-header">
                          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#cat-nav-mega">
                              <span className="sr-only">Toggle navigation</span>
                              <span className="icon-bar"></span>
                              <span className="icon-bar"></span>
                              <span className="icon-bar"></span>
                          </button>
                      </div>

                     
                      <div className="collapse navbar-collapse" id="cat-nav-mega">
                          <ul className="nav navbar-nav">
                              <li className="active" ><Link to="/product">ALL</Link></li>
                              <li><Link to="/product">HOA SINH NHAT</Link></li>
                              <li><Link to="/product">HOA TINH NHAN</Link></li>
                              <li><Link to="/product">HOA TANG ME </Link></li>
                              <li><Link to="/product">HOA CUOI </Link></li>
                              <li><Link to="/product">HOA 20/11 </Link></li>
                              <li><Link to="/product">HOA VIENG </Link></li>
                              
                              
                          </ul>
                           
                      </div>
                      
                  </nav>
              </div>
              </div>                
    
    </div> 
    );
}

export default TopMenu;