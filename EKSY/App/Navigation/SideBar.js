import React, {Component} from 'react'
import Style from './Styles/SideBarStyles'
import {Container, Content} from 'native-base'
import {Image, ListView} from 'react-native'

class SideBar extends Component {
  render() {
    return (
      <Container>
        <Content style={Style.content}>
          <Image source={require('../Images/logoPlaceHolder.png')}/>
          {/* <ListView>

          </ListView> */}
        </Content>
      </Container>
    )
  }
}

export default SideBar
