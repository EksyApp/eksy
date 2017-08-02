import React, { Component } from 'react'
import { connect } from 'react-redux'
import SettingsComponent from "../../Components/Settings/SettingsComponent";


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
