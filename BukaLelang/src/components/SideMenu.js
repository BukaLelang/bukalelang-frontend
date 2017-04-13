import React, { Component } from 'react'
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, List, ListItem } from 'native-base'

import Styles from '../assets/styles/Home.styles'

export default class SideMenu extends Component {
  render() {
    return (
      <Container>
        <Image source={{ uri: 'http://4.bp.blogspot.com/-IgOZa3Gm5Qc/VecNGI-7NJI/AAAAAAAAAk0/0bg1FVdAfes/s1600/Foto-Isyana-Sarasvati-01.jpg' }} style={{width: '100%', height: 250 }} />
        <Content>
          <List>
            <ListItem>
              <Text style={Styles.TextMenu}>Bikin Lelang</Text>
            </ListItem>
            <ListItem>
              <Text style={Styles.TextMenu}>Lapak Saya</Text>
            </ListItem>
            <ListItem>
              <Text style={Styles.TextMenu}>Ikut Lelang</Text>
            </ListItem>
            <ListItem>
              <Text style={Styles.TextMenu}>Menang Lelang</Text>
            </ListItem>
            <Button block style={Styles.LogoutButton}>
              <Text style={Styles.LogoutText}>Logout</Text>
            </Button>
          </List>
        </Content>
      </Container>
    )
  }
}
