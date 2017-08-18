import React, {Component} from 'react'
import MarkerViewComponent from "../../Components/Settings/MarkerViewComponent";
import {Actions} from 'react-native-router-flux'
import {connect} from "react-redux";
import {MarkerShape, RegionShape} from "../../Utils/PropTypeShapes";

export class MarkerViewContainer extends Component {
	
	render() {
		return(
				<MarkerViewComponent
						marker={this.props.marker}
						currentRegion={this.props.currentRegion}
						onEditClick={() => Actions.editMarker()}
						user={this.props.user}
				/>
		)
	}
	
}

MarkerViewContainer.propTypes = {
	marker: MarkerShape,
	currentRegion: RegionShape,
}

const mapStateToProps = (state) => {
	return {
		marker: state.markers.markerSelected,
		currentRegion: state.map.currentRegion,
		user: state.auth.user
	}
}

const mapDispatchToProps = (dispatch) => {
	return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(MarkerViewContainer)