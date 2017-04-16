import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'
import { Container, Content, InputGroup, Input } from 'native-base'

import HeaderNav from './HeaderNav'

class CreateAuction extends Component {
  componentWillMount () {
    Actions.refresh({key: 'MenuDrawer', open: value => !value})
  }

  render () {
    return (
      <Container>
        <HeaderNav />
        <Content>
          <InputGroup regular>
            <Input placeholder='Nama Barang' />
          </InputGroup>
          <InputGroup regular>
            <Input placeholder='Deskripsi Barang' />
          </InputGroup>
          <InputGroup regular>
            <Input placeholder='Berat (kg)' />
          </InputGroup>
          <InputGroup regular>
            <Input placeholder='Min. Price' />
          </InputGroup>
          <InputGroup regular>
            <Input placeholder='Max. Price' />
          </InputGroup>
          <InputGroup regular>
            <Input placeholder='Kelipatan Bidding' />
          </InputGroup>
          <InputGroup regular>
            <Input placeholder='Tanggal Mulai Lelang' />
          </InputGroup>
          <InputGroup regular>
            <Input placeholder='Tanggal Akhir Lelang' />
          </InputGroup>
        </Content>
      </Container>
    )
  }
}

export default CreateAuction
