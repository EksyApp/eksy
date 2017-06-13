import React, {Component} from 'react'
import * as Theme from '../Theme'
import {StyleSheet, View, Text} from 'react-native'
import MenuButton from './MenuButton'
import MenuBackButton from './MenuBackButton'
import {PropTypes} from 'prop-types'

console.log(Theme)

class Header extends Component {

  render() {
    let button = <MenuButton onPress={this.props.menuButtonPress} />
    if(this.props.backButton) {
      button = <MenuBackButton />
    }
    
    return(
      <View style={styles.container}>
        {button}
        <Text style={styles.text}>{this.props.title}</Text>
      </View>
    )
  }

}

Header.propTypes = {
  title: PropTypes.string,
  menuButtonPress: PropTypes.func,
  backButton : PropTypes.bool
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
