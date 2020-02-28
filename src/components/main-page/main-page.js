import React from 'react'
import './main-page.css'

import CurrentChat from '../current-chat';
import FormAddMessage from '../form-add-message/';
import ListMessage from '../list-messages';

import {useSelector} from 'react-redux'



function NotChooseChat() {
  return (
    <div className='not-choice-chat'>
      <p>You must choose a chat</p>
    </div>
  )
}


function CurrentChatChoose() {
  return (
    <>
      <CurrentChat />
      <ListMessage />
      <FormAddMessage />
    </>
  )
}


function MainPage() {
  const {currentChat} = useSelector(state => state.contacts);
  return (
    <div className='main-page-container'>
    {currentChat ? <CurrentChatChoose /> : <NotChooseChat />}      
    </div>
  )
}


export default MainPage;