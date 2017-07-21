import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import * as Theme from '../Theme'

export class UserSettingsScreen extends Component {
  constructor (props) {
    super(props)

    this.state = {
      //state todo
    }

  }

  render () {
    return (
      <View style={styles.container}>
        <Text> Hello World </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.backgroundColor,
  }
})

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSettingsScreen)
