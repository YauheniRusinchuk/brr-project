import React from 'react'

import SearchBar from '../search-bar'
import ContactList from '../contact-list'
import Logout from '../logout'


const listContacts = [
  {id: 1, firstName: "Eugene", lastName: "Rusinchuk", active: false},
  {id: 2, firstName: "James", lastName: "Boxtel", active: true},
  {id: 3, firstName: "Aron", lastName: "Shulch", active: true},
  {id: 4, firstName: "Eugene", lastName: "Rusinchuk", active: false},
  {id: 5, firstName: "Eugene", lastName: "Rusinchuk", active: false},
]



function MainMenu() {
  return (
    <div className='home-main-menu'>
        <SearchBar />
        <ContactList listContacts={listContacts}/>
        <Logout />
    </div>
  )
}


export default MainMenu;