import React, {Component} from 'react'
import NavigationRouter from '../Navigation/NavigationRouter'
import FirebaseConfig from '../Dao/FirebaseConfig'
import {Provider} from 'react-redux'
import {ActivityIndicator} from 'react-native'
import Store from '../Store'
import SplashScreen from 'react-native-splash-screen'
import CodePush from 'react-native-code-push'

//import BackgroundGeolocation from 'react-native-mauron85-background-geolocation'

let codePushOptions = { checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME }

export class Main extends Component {

  state = {
    store: null,
  }

  constructor (props) {
    super(props)
    FirebaseConfig.initialise()
  }

//Retrieves store and sets it to state
  async componentWillMount() {
    const store = await Store()
    this.setState({ store })
  }

//For waiting the app to load
  componentDidMount() {
    SplashScreen.hide()
  }

//Renders the main view using NavigationRouter
  render () {
    if (!this.state.store) {
      return (
        <ActivityIndicator size='large' style={{justifyContent: 'center', flexDirection: 'row', alignItems: 'center', flex: 1}}/>
      )
    }

    return (
      <Provider store={this.state.store}>
        <NavigationRouter />
      </Provider>
    )
  }
}

export default CodePush(codePushOptions)(Main)
