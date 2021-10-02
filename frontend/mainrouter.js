import React from 'react'
//import Route from 'react-router-dom'
import {Route, Routes} from 'react-router-dom'
import Home from './core_pages/Home'
import SettingsDrawer from './components/SettingsDrawer'

//import Users from './user/Users'
//import Signup from './user/Signup'
//import Signin from './auth/Signin'
//import EditProfile from './user/EditProfile'
//import Profile from './user/Profile'
//import PrivateRoute from './auth/PrivateRoute'
//import Menu from './core/Menu'

const MainRouter = () => {
    return ( <div>
      <Routes>
        <Route exact path="/" component={Home}/>
      </Routes>
    </div>
    )
}

export default MainRouter
