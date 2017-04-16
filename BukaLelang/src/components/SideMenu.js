import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'
import { Image, TouchableOpacity } from 'react-native';
import { Container, Content, Text, Button, List, ListItem } from 'native-base'

import Styles from '../assets/styles/Home.styles'


export default class SideMenu extends Component {
  testConsoleAja () {
    console.log('auuuauauauauauau');
  }
  render() {
    return (
      <Container>
        <Image source={{ uri: 'http://4.bp.blogspot.com/-IgOZa3Gm5Qc/VecNGI-7NJI/AAAAAAAAAk0/0bg1FVdAfes/s1600/Foto-Isyana-Sarasvati-01.jpg' }} style={{width: '100%', height: 250 }} />
        <Content>
          <List>
            <TouchableOpacity onPress={() => this.testConsoleAja()} style={{ width: '100%'}}>
              <ListItem>
                <Text style={Styles.TextMenu}>Bikin Lelang</Text>
              </ListItem>
            </TouchableOpacity>
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
