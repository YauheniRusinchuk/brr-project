import React, {useState} from 'react'

import './current-chat.css'

import Modal from '../modal'

import {useSelector, useDispatch} from 'react-redux'

import {openModalWithCurrentUser} from '../../actions/opneModalCurrent'


function CurrentChat() {
  
  const {isOpen} = useSelector(state => state.modal)
  const {currentChat} = useSelector(state => state.contacts)
  const {id, firstName, lastName} = currentChat

  const dispatch = useDispatch()
  

  return (
    <div className='current-chat-container'>
      {isOpen && <Modal />}
    <p>This is a chat with <span onClick={()=>{dispatch(openModalWithCurrentUser(id))}}>{firstName} {lastName}</span></p>
    </div>
  )
}


export default CurrentChat;