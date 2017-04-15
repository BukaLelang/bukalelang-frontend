import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'
import { Image } from 'react-native'
import { Container, Content, Button, Text, Footer, FooterTab, Icon } from 'native-base'

import HeaderNav from './HeaderNav'
import Styles from '../assets/styles/Home.styles'

class AuctionDetail extends Component {
  render () {
    return (
      <Container>
        <HeaderNav />
        <Image source={{ uri: 'http://4.bp.blogspot.com/-IgOZa3Gm5Qc/VecNGI-7NJI/AAAAAAAAAk0/0bg1FVdAfes/s1600/Foto-Isyana-Sarasvati-01.jpg' }} style={{width: '100%', height: '71%' }} />
        <Footer style={{ height: 40}}>
          <FooterTab style={{ backgroundColor: '#E29A09' }}>
            <Button>
              <Text style={Styles.FooterText}>Rp. 0,-</Text>
            </Button>
          </FooterTab>
        </Footer>
        <Footer>
          <FooterTab style={Styles.Footer}>
            <Button>
              <Text style={Styles.FooterText}>Bid Now!</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}

export default AuctionDetail
