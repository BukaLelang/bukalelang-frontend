import React, { Component } from 'react'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base'
import { Actions } from 'react-native-router-flux'

import Styles from '../assets/styles/Home.styles'

class Home extends Component {
  render () {
    return (
      <Container>
        <Header style={Styles.Header}>
          <Left>
            <Button transparent>
            <Icon name='menu' onPress={() => Actions.refresh({key: 'MenuDrawer', open: value => !value})} />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>Haloo mas</Text>
          <Button onPress={Actions.Login}><Text>Login</Text></Button>
          <Button onPress={Actions.Register}><Text>Register</Text></Button>
          <Button onPress={Actions.CardImage}><Text>Card Image</Text></Button>
          <Button onPress={Actions.TabsBoard}><Text>TabsBoard</Text></Button>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}

export default Home
