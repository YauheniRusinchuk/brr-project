import React from 'react'



const Message = () => {
  return (
    <div className='main-page-chat'>
     <span>James</span>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  </div>
  )
}


function ListMessage() {
  return (
    <div className='main-page-wrapper'>
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  )
}


export default ListMessage;
