import React from 'react'
import './main-page.css'

import CurrentChat from '../current-chat';
import FormAddMessage from '../form-add-message/';
import ListMessage from '../list-messages';


function MainPage() {
  return (
    <div className='main-page-container'>
      <CurrentChat />
      <ListMessage />
     <FormAddMessage />
    </div>
  )
}


export default MainPage;