import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import { Header, Left, Button, Icon, Body, Title, Right, Text } from 'native-base'

import { Actions } from 'react-native-router-flux'
import Styles from '../assets/styles/Home.styles'

const HeaderNav = () => (
  <Header style={Styles.Header}>
    <Left>
      <Button transparent style={Styles.BurgerMenu}>
      <Icon name='menu' onPress={() => Actions.refresh({key: 'MenuDrawer', open: value => !value})} />
      </Button>
    </Left>
    <Body>
      <Title style={Styles.Logo}>BukaLelang</Title>
    </Body>
    <Body>
      <TouchableOpacity style={Styles.TouchSearch} onPress={Actions.Search }>
        <Icon name='ios-search' style={Styles.Search}/>
      </TouchableOpacity>
    </Body>
  </Header>
)

export default HeaderNav
