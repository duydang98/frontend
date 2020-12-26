import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signin } from '../actions/userAction';

function Signin(props) {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const dispatch = useDispatch();

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';
    console.log(redirect);
    const userSignin = useSelector(state => state.userSignin);
    const {userInfo} = userSignin;
  const submitHandler = (e)=>{
    e.preventDefault();
    dispatch(signin(email,password));
  }
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);
    return (
      <div id="content">
        <div className="newest">
          <div className="container">
            <div className="newest-content">
              <div className="newest-tab"> 
                <div id="myTabContent" className="tab-content">
                  <div role="tabpanel" className="tab-pane fade in active" id="1" aria-labelledby="cat-1">
                      <div className="row clearfix">

                        <div className="col-sm-6 col-md-4 col-md-offset-4">
                                <h1 className="text-center login-title">Sign in </h1>
                                <div className="account-wall">
                                    <img className="profile-img" src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
                                        alt=""/>
                                    <form className="form-signin" onSubmit={submitHandler}>

                                    <input type="text" className="form-control"
                                      onChange={(e)=>setEmail(e.target.value)}
                                      placeholder="Email" required autofocus/>

                                    <input type="password" className="form-control"
                                      onChange={(e)=>setPassword(e.target.value)}
                                     placeholder="Password" required/>
                                    <button className="btn btn-lg btn-primary btn-block" type="submit">
                                        Sign in</button>
                                    <label className="checkbox pull-left">
                                        <input type="checkbox" value="remember-me"/>
                                        Remember me
                                    </label>
                                    <span className="clearfix"></span>
                                    </form>
                                </div>
                                <Link to="/" className="text-center new-account">Create an account </Link>
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

export default Signin;