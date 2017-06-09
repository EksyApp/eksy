import React, {Component} from 'react'
import {StyleSheet} from 'react-native'
import {Button} from 'react-native-elements'
import {AccentColor, FontLightColor} from '../Theme'

class ActionButton extends Component {

  render() {
    return (
      <Button
        onPress={this.props.onPress}
        title={this.props.title}
        buttonStyle={StyleSheet.flatten(styles.button, this.props.style)}
        textStyle={styles.text}
      />
    )

  }

}

const styles = StyleSheet.create({

  button: {
    width: '50%',
    backgroundColor: AccentColor,
    alignSelf: 'center',
    margin: 10
  },

  text: {
    color: FontLightColor
  }
})

export default ActionButton
