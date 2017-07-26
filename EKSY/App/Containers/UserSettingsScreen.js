import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Header } from '../Components/Common'
import { connect } from 'react-redux'
import * as Theme from '../Theme'
import FilterSettingsContainer from "./Settings/FilterSettingsContainer";

state = {
  violentChecked: false,
  accessibleChecked: false
}

export class UserSettingsScreen extends Component {
  constructor (props) {
    super(props)

    this.state = {
      // todo state
    }

  }

  render () {
    return (
      <View style={styles.container}>
        <Header title='Filter Settings' backButton />
        <View>
          <Text> todo: username here </Text>
        </View>
        <FilterSettingsContainer/>
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
