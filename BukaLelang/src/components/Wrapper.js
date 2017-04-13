import React from 'react'
import { Scene, Router } from 'react-native-router-flux'

import Home from './Home'
import Login from './Login'
import Register from './Register'
import MenuDrawer from './MenuDrawer'
import Search from './Search'

const Wrapper = () => (
  <Router>
    <Scene key='root'>
      <Scene key="MenuDrawer" component={MenuDrawer} open={false}>
        <Scene key='Home' component={Home} initial={true} hideNavBar />
      </Scene>
      <Scene key='Login' component={Login} hideNavBar />
      <Scene key='Register' component={Register} hideNavBar />
      <Scene key='Search' component={Search} hideNavBar />
    </Scene>
  </Router>
)

export default Wrapper
