import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signin } from '../actions/userAction';
import Content from '../components/Content';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';
function Signin(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';
  
  const userSignin = useSelector(state => state.userSignin);
  const { userInfo,loading,error } = userSignin;
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  }
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);
  return (
    <Content>
      {loading && <LoadingBox></LoadingBox>}
      {error && <MessageBox> {error}</MessageBox>}
      <div className="col-sm-6 col-md-4 col-md-offset-4">
        <h1 className="text-center login-title">Sign in </h1>
        <div className="account-wall">
          <img className="profile-img" src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
            alt="" />
          <form className="form-signin" onSubmit={submitHandler}>

            <input type="text" className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email" required autofocus />

            <input type="password" className="form-control"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password" required />
            <button className="btn btn-lg btn-primary btn-block" type="submit">
              Sign in</button>
            <label className="checkbox pull-left">
              <input type="checkbox" value="remember-me" />
                                        Remember me
                                    </label>
            <span className="clearfix"></span>
          </form>
        </div>
        <Link to={`/register/?redirect=${redirect}`} className="text-center new-account">Create an account </Link>
      </div>
    </Content>
  );
}

export default Signin;