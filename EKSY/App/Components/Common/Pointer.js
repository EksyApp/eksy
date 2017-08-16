import React, {Component} from 'react'
import MapView from 'react-native-maps'
import PropTypes from 'prop-types';
import { RegionShape } from "../../Utils/PropTypeShapes";

export default class Pointer extends Component {
	
	
	render() {
		return (
				<MapView
						style={this.props.style}
						initialRegion={this.props.initialRegion}
				>
					<MapView.Marker coordinate={this.props.initialRegion}/>
				</MapView>
		)
	}
}

Pointer.PropTypes = {
	style: PropTypes.object ,
	initialRegion: RegionShape
}