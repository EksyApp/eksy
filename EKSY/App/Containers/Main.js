import React, {Component} from 'react'
import NavigationRouter from '../Navigation/NavigationRouter'
import FirebaseConfig from '../includes/FirebaseConfig'
import {Provider} from 'react-redux'
import {ActivityIndicator} from 'react-native'
import Store from '../Store'
import SplashScreen from 'react-native-splash-screen'
import codePush from 'react-native-code-push'

const codePushOptions = {
  checkFrequency: codePush.checkFrequency.ON_APP_RESUME,
  minimumBackgroundDuration = 60 * 10
}

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

  componentDidMount() {
    SplashScreen.hide()
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

export default codePush(codePushOptions)(Main)
