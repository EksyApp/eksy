import React, { Component } from 'react'
import { connect } from 'react-redux'
import SettingsComponent from "../../Components/Settings/SettingsComponent";

//Renders the user setting view and holds it's logic
//Upper part of the view is from ProfileContainer
//Lower part of the view is from FilterSettingsContainer
export class SettingsContainer extends Component {

  render () {
    return (
      <SettingsComponent/>
    )
  }
}


const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer)
