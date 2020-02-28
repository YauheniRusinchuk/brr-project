import React, {useState} from 'react'

import './current-chat.css'

import Modal from '../modal'

import {useSelector} from 'react-redux'



function CurrentChat() {
  const [modal, setModal] = useState(false);
  const {currentChat} = useSelector(state => state.contacts)
  const {id, firstName, lastName} = currentChat

  return (
    <div className='current-chat-container'>
      {modal && <Modal />}
    <p>This is a chat with <span onClick={(e) => setModal(true)}>{firstName} {lastName}</span></p>
    </div>
  )
}


export default CurrentChat;