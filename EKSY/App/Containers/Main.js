import React, {Component} from 'react'
import NavigationRouter from '../Navigation/NavigationRouter'
import FirebaseConfig from '../includes/FirebaseConfig'

class Main extends Component {

  constructor (props) {
    super(props)
    FirebaseConfig.initialise()
  }

  render () {
    return (

      <NavigationRouter />
    )
  }
}

export default Main
