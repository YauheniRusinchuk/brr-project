import React from 'react'


import ContactItem from '../contact-list-item'

function ContactList({listContacts}) {
  return (
    <div className='home-main-list-contacts'>
    {listContacts.map((contact) => {
      return (
        <ContactItem 
          key={contact.id}
          firstName={contact.firstName}
          lastName={contact.lastName}
          active={contact.active}
        />
      )
    })}
  </div>
  )
}


export default ContactList;

