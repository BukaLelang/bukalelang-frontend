import React, { Component } from 'react'
import { Navigator } from 'react-native'

import Home from './components/Home.js'

export default class App extends Component {
  render () {
    return (
      <Navigator
        initialRoute={{ title: 'home' }}
        renderScene={(route, navigator) => {
          switch (route.title) {
            case 'home': return <Home navigator={navigator} />
            default: return <Home />
          }
        }}
      />
    )
  }
}
