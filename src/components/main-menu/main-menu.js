import React from 'react'

import SearchBar from '../search-bar'
import ContactList from '../contact-list'
import Logout from '../logout'

import {useSelector} from 'react-redux' 



function MainMenu() {

  const {contacts} = useSelector(state => state.contacts);

  return (
    <div className='home-main-menu'>
        <SearchBar />
        <ContactList listContacts={contacts}/>
        <Logout />
    </div>
  )
}


export default MainMenu;