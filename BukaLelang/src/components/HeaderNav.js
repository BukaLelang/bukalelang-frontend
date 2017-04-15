import React, { Component } from 'react'

import Styles from '../assets/styles/Home.styles'

const HeaderNav = () => (
  <Header style={Styles.Header}>
    <Left>
      <Button transparent>
      <Icon name='menu' onPress={() => Actions.refresh({key: 'MenuDrawer', open: value => !value})} />
      </Button>
    </Left>
    <Body>
      <Title style={Styles.Logo}>BukaLelang</Title>
    </Body>
    <Right />
  </Header>
)
