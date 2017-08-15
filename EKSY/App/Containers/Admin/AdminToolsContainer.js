import React, { Component } from 'react'
import { connect } from 'react-redux'
import AdminToolsComponent from "../../Components/Admin/AdminToolsComponent";
import * as ReduxActions from "../../Actions";
import {Actions} from 'react-native-router-flux'

export class AdminToolsContainer extends Component {
	
	
	handleRadius(radius) {
		radius = parseInt(radius)
		radius = radius/1000
		if(!isNaN(radius) && radius > 0) {
			this.props.updateRadius(radius)
		}
	}
	
	confirmClick() {
		Actions.adminConfirmMarkers()
	}
	
	
  render () {
    return (
      <AdminToolsComponent
          onRadiusChange={(radius) => this.handleRadius(radius)}
          onConfirmClick={() => this.confirmClick()}
          radius={this.props.radius*1000}
      />
    )
  }
	
	
	
}

const mapStateToProps = (state) => {
  return {
  	radius: state.map.radius
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
	  updateRadius: (radius) => {dispatch(ReduxActions.updateRadius(radius))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminToolsContainer)
