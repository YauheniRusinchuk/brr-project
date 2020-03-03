import {combineReducers} from 'redux';

import authReducer from './authReducer'
import contactsReducer from './contactsReducer'
import openModalWithCurrentUser from './modalReducer'



export default combineReducers({
  auth: authReducer,
  contacts: contactsReducer,
  modal: openModalWithCurrentUser
})

