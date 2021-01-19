import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import UserRoute from './protectedRoutes/UserRoute'
import AdminRoute from './protectedRoutes/AdminRoute'

// components import
import Home from '../pages/Home'
import Register from '../pages/Auth/Register'
import Login from '../pages/Auth/Login'
import ForgotPassword from '../pages/Auth/ForgotPassword'
import Cart from '../pages/Cart'
import Shop from '../pages/Shop'
import AdminDashboard from '../pages/Admin/AdminDashboard'

function MainRoutes () {
  return (
    <Switch>
      <Route exact path={'/'} component={Home}/>
      <Route exact path={'/Register'} component={Register}/>
      <Route exact path={'/Login'} component={Login}/>
      <Route exact path={'/forgot/password'} component={ForgotPassword}/>
      <Route exact path={'/Cart'} component={Cart}/>
      <Route exact path={'/Shop'} component={Shop}/>
      <AdminRoute exact path={'/Admin/dashboard'} component={AdminDashboard}/>
      <Route exact path="*" render={() => <div>Page is not found</div>} />
    </Switch>
  )
}

export default MainRoutes



