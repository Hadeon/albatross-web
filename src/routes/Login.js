import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../_actions/authActions';
import '../index.css';

const Login = () => {
  const dispatch = useDispatch();

  return (
    <div className="main-container">
      <h1>Login Page</h1>
      <Link to="/" style={{ textDecoration: 'none' }} onClick={() => dispatch(login())}><h2>Login</h2></Link>
    </div>
  )
}

export default Login;