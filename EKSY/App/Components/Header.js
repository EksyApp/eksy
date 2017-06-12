import React, {Component} from 'react'
import * as Theme from '../Theme'
import {StyleSheet, View, Text} from 'react-native'
import MenuButton from './MenuButton'
import {PropTypes} from 'prop-types'

console.log(Theme)

class Header extends Component {

  render() {
    return(
      <View style={styles.container}>
        <MenuButton onPress={this.props.menuButtonPress} />
        <Text style={styles.text}>{this.props.title}</Text>
      </View>
    )
  }

}

Header.propTypes = {
  title: PropTypes.string,
  menuButtonPress: PropTypes.func.isRequired
}

const styles = StyleSheet.create({

  container: {
    height: 50,
    backgroundColor: Theme.frontgroundColor,
    justifyContent: 'center'
  },

  text: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: Theme.accentColor
  }

})

export default Header
