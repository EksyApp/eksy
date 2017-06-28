import React, {Component} from 'react'
import NavigationRouter from '../Navigation/NavigationRouter'
import FirebaseConfig from '../includes/FirebaseConfig'
import {Provider} from 'react-redux'
import {ActivityIndicator} from 'react-native'
import Store from '../Store'

class Main extends Component {

  state = {
    store: null
  }

  constructor (props) {
    super(props)
    FirebaseConfig.initialise()
  }

  async componentWillMount() {
    const store = await Store()
    this.setState({ store })
  }

  render () {
    if (!this.state.store) {
      return (
        <ActivityIndicator />
      )
    }

    return (
      <Provider store={this.state.store}>
        <NavigationRouter />
      </Provider>
    )
  }
}

export default Main
