import React, {useState} from 'react'

import './current-chat.css'

import Modal from '../modal'


function CurrentChat() {
  const [modal, setModal] = useState(false);
  return (
    <div className='current-chat-container'>
      {modal && <Modal />}
      <p>This is a chat with <span onClick={(e) => setModal(true)}>James Boxtel</span></p>
    </div>
  )
}


export default CurrentChat;