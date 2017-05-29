import React, {Component} from 'react'
import {View, Text, Image} from 'react-native'
import Style from './Styles/SideBarStyles'

class SideBarLogo extends Component {

  render() {
    return(
      <Image source={require('../Images/logoPlaceHolder.png')} style={Style.image} />
    )
  }
}

export default SideBarLogo
