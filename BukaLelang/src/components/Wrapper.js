import React from 'react'
import { Scene, Router } from 'react-native-router-flux'

import Home from './Home'

const Wrapper = () => (
  <Router>
    <Scene key='root'>
      <Scene key='Home' component={Home} initial={true} hideNavBar />
    </Scene>
  </Router>
)

export default Wrapper
