import React from 'react'
import './login.css'
import {Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux'


const Login = () => {
  return (
    <div className='login-container'>
      <h2>WELCOME TO SENLA CHAT</h2>
      <form className='login-form'>
        <input type='email' placeholder="Email ..." />
        <input type="password" placeholder="Password ..." />
        <button className='btn btn-login'>LOGIN CLICK!</button>
      </form>
    </div>
  )
}


function LoginContainer() {
  const {isAuthenticated} = useSelector(state => state.auth);
  
  if(isAuthenticated) {
    return <Redirect to='/' />
  }

  return (
    <Login />
  )
}

export default LoginContainer;