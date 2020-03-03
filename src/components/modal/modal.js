import React, {useRef, useEffect} from 'react'

import './modal.css'


import {openModalWithCurrentUser} from '../../actions/opneModalCurrent'

import {useDispatch} from 'react-redux'


function Modal(){

  const ref = useRef();
  const dispatch = useDispatch()

  const handleClick = e => {
    if (ref.current && !ref.current.contains(e.target)) {
     dispatch(openModalWithCurrentUser(1));
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  return (
    <div ref={ref} className='modal-container'>
      This is modal window.
    </div>
  )
}

export default Modal;