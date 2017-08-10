import React, {Component} from 'react'
import UserMarkerViewComponent from "../../Components/Settings/UserMarkerViewComponent";
import {Actions} from 'react-native-router-flux'
import {connect} from "react-redux";

export class UserMarkerViewContainer extends Component {
	
	render() {
		return(
				<UserMarkerViewComponent
						marker={this.props.marker}
						currentRegion={this.props.currentRegion}
						onEditClick={() => Actions.editMarker()}
				/>
		)
	}
	
}

const mapStateToProps = (state) => {
	return {
		marker: state.markers.markerSelected,
		currentRegion: state.map.currentRegion
	}
}

const mapDispatchToProps = (dispatch) => {
	return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMarkerViewContainer)