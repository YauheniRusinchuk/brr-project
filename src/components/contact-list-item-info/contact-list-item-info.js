import React from 'react'


const ContactInfo = ({active, changeCurrentChat, id ,firstName, lastName}) => {
  return (
    <div className='home-main-contact-info'>
      <p onClick={e => changeCurrentChat(id)}>{firstName} {lastName}</p>
      <span className={active ? 'online': 'offline'}>
        {active ? "online" : "offline"}
      </span>
    </div>
  )
}


export default ContactInfo;