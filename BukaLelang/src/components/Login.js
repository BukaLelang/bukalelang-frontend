import React, {Component} from 'react'
import { Image } from 'react-native'
import { Container, Content, Form, Input, Button, Text, InputGroup, H1, Footer, FooterTab } from 'native-base'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'

import Styles from '../assets/styles/Login.styles'
import * as ActionType from '../actions/constant.js'

class Login extends Component {
  componentDidMount () {
    if (this.props.login.asyncKey) {
      Actions.Home()
    }
  }

  render () {
    return (
      <Container>
        <Content style={Styles.Container}>
          <Form>
            <H1 style={Styles.Logo}>BUKALELANG</H1>
            <InputGroup regular>
              <Input placeholder='Nama Lengkap' />
            </InputGroup>
            <InputGroup regular>
              <Input placeholder='Email' />
            </InputGroup>
            <InputGroup regular>
              <Input placeholder='Password' type='password' />
            </InputGroup>
            <Button block style={Styles.LoginButton}>
              <Text>Login</Text>
            </Button>
            <Text style={Styles.OrStyle}>OR</Text>
            <Button block style={Styles.FacebookButton}>
              <Image source={require('../assets/images/fb-logo.png')} style={Styles.IconImage} />
              <Text style={Styles.TextButton}>Login dengan Facebook</Text>
            </Button>
            <Button block style={Styles.GoogleButton}>
              <Image source={require('../assets/images/google-logo.png')} style={Styles.IconImage}  />
              <Text style={Styles.TextButton}>Login dengan Google</Text>
            </Button>
          </Form>
        </Content>
        <Footer>
          <FooterTab style={Styles.Footer}>
            <Button full onPress={Actions.Register}>
              <Text>Belum Punya Akun? Daftar Sekarang</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login
  }
}

export default connect(mapStateToProps, null)(Login)