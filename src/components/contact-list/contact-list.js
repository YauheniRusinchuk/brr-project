import React from 'react'


import ContactItem from '../contact-list-item'

import {currentChatAction} from '../../actions/currentChat'
import { useDispatch } from 'react-redux'

function ContactList({listContacts}) {

  const dispatch = useDispatch();
  const changeCurrentChat = (id) => {
    console.log("ID :", id)
    dispatch(currentChatAction(id))
    
  }

  return (
    <div className='home-main-list-contacts'>
    {listContacts.map((contact) => {
      return (
        <ContactItem 
          key={contact.id}
          id={contact.id}
          firstName={contact.firstName}
          lastName={contact.lastName}
          active={contact.active}
          changeCurrentChat={changeCurrentChat}
        />
      )
    })}
  </div>
  )
}


export default ContactList;

