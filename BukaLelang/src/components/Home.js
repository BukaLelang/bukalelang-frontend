import React, { Component } from 'react'
import { Image } from 'react-native'
import { Container, Header, Card, CardItem, Thumbnail, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base'
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
          <Card >
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: 'http://2.bp.blogspot.com/-0D42yxBptYI/VecNHN0EJAI/AAAAAAAAAkw/MfvR2JXAnpw/s1600/Foto-Isyana-Sarasvati.jpg' }} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
                <Image source={{ uri: 'http://4.bp.blogspot.com/-IgOZa3Gm5Qc/VecNGI-7NJI/AAAAAAAAAk0/0bg1FVdAfes/s1600/Foto-Isyana-Sarasvati-01.jpg' }} style={{width: '100%', height: 250 }} />
            </CardItem>
            <CardItem content>
                <Text>Wait a minute. Wait a minute, Doc. Uhhh...
              Are you telling me that you built a time machine... out of a DeLorean?!
              Whoa. This is heavy.</Text>
            </CardItem>
            <Button block style={Styles.ParticipateButton}>
              <Text> Ikut Lelang </Text>
            </Button>
          </Card>
        </Content>
        <Footer>
          <FooterTab style={Styles.Footer}>
            <Button>
              <Icon name="apps" style={Styles.FooterText} />
            </Button>
            <Button>
              <Icon name="camera"  style={Styles.FooterText} />
            </Button>
            <Button onPress={Actions.Login}>
              <Text style={Styles.FooterText} >Login</Text>
            </Button>
            <Button onPress={Actions.Register}>
              <Text style={Styles.FooterText} >Register</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}

export default Home
