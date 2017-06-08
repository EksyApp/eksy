import React, {Component} from 'react'
import Styles from './Styles/MenuButtonStyle'
import PostOffice from '../lib/PostOffice'
import {Button, Icon} from 'react-native-elements'

class MenuButton extends Component {

  render() {
    return(
      <Icon onPress={this.props.onPress} name="menu" containerStyle={style.buttonStyle} size={35} />
    )
  }
}

const style = {
  buttonStyle: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1

  }
}
export default MenuButton
