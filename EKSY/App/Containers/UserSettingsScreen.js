import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Header } from '../Components/Common'
import { connect } from 'react-redux'
import * as Theme from '../Theme'
import { CheckBox } from 'react-native-elements'

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
        <View>
          <CheckBox
            title="Show violent content"
            checked={this.state.violentChecked}
            onPress={() => {this.setState({violentChecked: !this.state.violentChecked})}}
          />
          <CheckBox
            title="Show only accessible locations"
            checked={this.state.accessibleChecked}
            onPress={() => {this.setState({accessibleChecked: !this.state.accessibleChecked})}}
          />
        </View>
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
