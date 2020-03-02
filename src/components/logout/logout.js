import React from 'react'
import {useDispatch} from 'react-redux'
import {LogoutAction} from '../../actions/authActions'

import Button from '../../shared/button'


function Logout () {
  
  const dispatch = useDispatch();
  
  return (
    <div className='home-btn-logout'>
      {/* <button onClick={()=> dispatch(LogoutAction())} className="btn btn-logout">LOGOUT</button> */}
      <Button name="LOGOUT" onClick={()=> dispatch(LogoutAction())} className="btn btn-logout"/>
    </div>
  )
}



export default Logout;