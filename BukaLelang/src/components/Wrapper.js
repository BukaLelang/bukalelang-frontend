import React from 'react'
import { Scene, Router, Drawer } from 'react-native-router-flux'

import Home from './Home'
import Login from './Login'
import Register from './Register'
import MenuDrawer from './MenuDrawer'
import Search from './Search'
import AuctionDetail from './AuctionDetail'

const Wrapper = () => (
  <Router>
    <Scene key="MenuDrawer" component={MenuDrawer}>
      <Scene key="main" tabs={false} >
      <Scene key='Home' component={Home} hideNavBar />
      <Scene key='Login' component={Login} hideNavBar />
      <Scene key='Register' component={Register} hideNavBar />
      <Scene key='Search' component={Search} hideNavBar />
      <Scene key='AuctionDetail' component={AuctionDetail} hideNavBar />
      </Scene>
    </Scene>
  </Router>
)

export default Wrapper
