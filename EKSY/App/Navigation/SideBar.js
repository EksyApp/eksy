import React, {Component} from 'react'
import Style from './Styles/SideBarStyles'
import {Container, Content, Button} from 'native-base'
import {Image, ScrollView, Text, View} from 'react-native'
import {Actions} from 'react-native-router-flux'

class SideBar extends Component {
  render() {
    return (
      <Container>
        <Content style={Style.content}>
          <ScrollView>

            <Image source={require('../Images/logoPlaceHolder.png')} style={Style.image} />

            <Button light full onPress={Actions.addMarker} style={Style.button}>
              <Text>Add a marker</Text>
            </Button>
            <Button light full onPress={Actions.login} style={Style.button}>
              <Text>Login</Text>
            </Button>
          </ScrollView>
        </Content>
      </Container>
    )
  }
}

export default SideBar
