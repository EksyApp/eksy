import React, {Component} from 'react'
import {Actions} from 'react-native-router-flux'
import * as ReduxActions from '../../Actions/index'
import {connect} from 'react-redux'
import SideBarComponent from "../../Components/SideBar/SideBarComponent";

export class SideBarContainer extends Component {

  render() {
    return (
      <SideBarComponent
          goToMap={this.props.goToMap}
          goUserSettings={this.props.goToUserSettings}
          goToAddMarker={this.props.goToAddMarker}
          goToLoginScreen={this.props.goToLoginScreen}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    goToMap: () => {
      Actions.mainViewContainer()
      dispatch(ReduxActions.drawerClose())
    },
    goToUserSettings: () => {
      Actions.userSettings()
      dispatch(ReduxActions.drawerClose())
    },
    goToAddMarker: () => {
      Actions.addMarker()
      dispatch(ReduxActions.drawerClose())
    },
    goToLoginScreen: () => {
      Actions.login()
      dispatch(ReduxActions.drawerClose())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBarContainer)
