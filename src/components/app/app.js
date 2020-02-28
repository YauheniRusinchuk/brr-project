import React from 'react'
import LoginPage from '../../pages/login-page'
import HomePage from '../../pages/home-page'
import "./app.css"
import {Route, Switch} from 'react-router-dom'
import PrivateRouter from '../private-router'
import AdminPage from '../../pages/admin-page'


function App() {

  return (
    <>
      <Switch>
        <PrivateRouter exact path='/'  component={HomePage} />
        <Route path='/login' component={LoginPage} />
        <Route path="/admin-panel" component={AdminPage} />
      </Switch>
    </>
  )
}



export default App;