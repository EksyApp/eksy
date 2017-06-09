import React, {Component} from 'react'
import * as Theme from '../Theme'
import {StyleSheet, View, Text} from 'react-native'
import MenuButton from './MenuButton'

console.log(Theme)

class Header extends Component {

  render() {
    return(
      <View style={styles.container}>
        <MenuButton />
        <Text>{this.props.title}</Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({

  container: {
    height: 50,
    backgroundColor: Theme.FrontgroundColor
  }

})

export default Header
