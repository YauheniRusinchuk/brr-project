import React from 'react'
import './home.css'

import MainMenu from '../main-menu'
import MainPage from '../main-page'


function Home() {
  return (
    <div className='home-container'>
      <MainMenu />
      <MainPage />
    </div>
  )
}


export default Home;