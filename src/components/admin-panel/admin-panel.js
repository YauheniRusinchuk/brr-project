import React from 'react'
import './admin-panel.css'

import {withRouter} from 'react-router-dom'


function AdminPanel() {
  return (
    <div className="admin-panel-container">
      <div className='admin-panel-wrapper'>
        <div className='admin-wrapper-item'>
            <h4>All people in chat</h4>
            <p>233</p>
        </div>
        <div className='admin-wrapper-item'>
          <h4>All messages</h4>
          <p>2333</p>
        </div>
      </div>
    </div>
  )
}


export default AdminPanel;