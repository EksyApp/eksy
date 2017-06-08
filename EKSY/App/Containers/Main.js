import React, {Component} from 'react'
import NavigationRouter from '../Navigation/NavigationRouter'
import FirebaseConfig from '../includes/FirebaseConfig'
import {Provider} from 'react-redux'
import store from '../Store'

class Main extends Component {

  constructor (props) {
    super(props)
    FirebaseConfig.initialise()
  }

  render () {
    return (
      <Provider store={store}>
        <NavigationRouter />
      </Provider>
    )
  }
}

export default Main
