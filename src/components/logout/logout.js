import React from 'react'
import {useDispatch} from 'react-redux'
import {LogoutAction} from '../../actions/authActions'


function Logout () {
  
  const dispatch = useDispatch();
  
  return (
    <div className='home-btn-logout'>
      <button onClick={()=> dispatch(LogoutAction())} className="btn btn-logout">LOGOUT</button>
    </div>
  )
}



export default Logout;