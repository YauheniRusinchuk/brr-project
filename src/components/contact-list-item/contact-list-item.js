import React from 'react'

import ItemAvatar from '../contact-list-item-avatar'
import ContactInfo from '../contact-list-item-info'


const ContactItem = (props) => {
  return (
    <div className='home-main-contact'>
    <ItemAvatar src="https://sun9-4.userapi.com/c856020/v856020682/14deda/G1UUrBfH75w.jpg" />
      <ContactInfo 
        {...props}
      />
  </div>
  )
}


export default ContactItem;
