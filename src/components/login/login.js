import React from 'react'
import './login.css'
import {Redirect} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'

import {LoginAction} from '../../actions/authActions'


const Login = ({loginHandler}) => {
  return (
    <div className='login-container'>
      <h2>WELCOME TO CHAT</h2>
      <form className='login-form'>
        <input type='email' placeholder="Email ..." />
        <input type="password" placeholder="Password ..." />
        <button onClick={loginHandler} className='btn-login'>LOGIN CLICK!</button>
      </form>
    </div>
  )
}


function LoginContainer() {
  const {isAuthenticated} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(LoginAction())
  }
  
  if(isAuthenticated) {
    return <Redirect to='/' />
  }

  return (
    <Login loginHandler={loginHandler}/>
  )
}

export default LoginContainer;