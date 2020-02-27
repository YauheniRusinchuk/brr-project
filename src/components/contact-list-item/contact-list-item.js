import React from 'react'
import {Link} from 'react-router-dom'

import ItemAvatar from '../contact-list-item-avatar'


const ContactItem = ({firstName, lastName, active}) => {
  return (
    <div className='home-main-contact'>
    <ItemAvatar src="https://sun9-4.userapi.com/c856020/v856020682/14deda/G1UUrBfH75w.jpg" />
    <div className='home-main-contact-info'>
      <Link to='/'>{firstName} {lastName}</Link>
      <span className={active ? 'online': 'offline'}>
        {active ? "online" : "offline"}
      </span>
    </div>
  </div>
  )
}


export default ContactItem;
