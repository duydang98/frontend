import React from 'react';
import {
    Link
  } from "react-router-dom";
function TopMenu(props) {
    return (
        <div>
            <header>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link to='/' className="navbar-brand" >Flower Shop</Link>
             
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className="active"><a href="/">  Home <span className="sr-only">(current)</span></a></li>
                <li><a href="/">Shop</a></li>
                <li className="dropdown">
                  <a href="index.html" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> Category <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="index.html">Action</a></li>
                    <li><a href="index.html">Another action</a></li>
                    <li><a href="index.html">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="index.html">Separated link</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="index.html">One more separated link</a></li>
                  </ul>
                </li>
              </ul>
              <form className="navbar-form navbar-left">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Search" />
                </div>
                <button type="submit" className="btn btn-default">Search</button>
              </form>
              <ul className="nav navbar-nav navbar-right">
                <li><a href="index.html">Cart</a></li>
                <li className="dropdown">
                  <a href="index.html" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">User<span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="index.html">Action</a></li>
                    <li><a href="index.html">Another action</a></li>
                    <li><a href="index.html">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="index.html">Separated link</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
        </div>
    );
}

export default TopMenu;