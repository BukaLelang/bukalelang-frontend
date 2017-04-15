import React, { Component } from 'react'
import { Container, Header, InputGroup, Input, Icon, Button, Text } from 'native-base'

import Styles from '../assets/styles/Search.styles'

export default class SearchBarNav extends Component {
  render() {
    return (
      <Container>
        <Header searchBar rounded style={Styles.Header}>
          <InputGroup regular style={Styles.InputGroupBackground}>
            <Icon name="ios-search" style={Styles.IconColor} />
            <Input placeholder="Search" />
          </InputGroup>
            <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
      </Container>
    )
  }
}
