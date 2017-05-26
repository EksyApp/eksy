import React, {Component} from 'react'
import NavigationRouter from '../Navigation/NavigationRouter'

import * as firebase from "firebase";
import Firebase from "../includes/firebase";

class Main extends Component {
  constructor(props){
    super(props);
    Firebase.initialise();
  }
  render() {
    return(
      <NavigationRouter />
    )
  }
}

export default Main
