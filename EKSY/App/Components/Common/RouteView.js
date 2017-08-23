import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import RouteMap from './RouteMap'
import Label from './Label'
import TextArea from './TextArea'
import Divider from './Divider'
import MarkerCardList from './MarkerCardList'
import PropTypes from 'prop-types'
import {RegionShape, RouteShape} from "../../Utils/PropTypeShapes";

export default class RouteView extends Component {
	
	render() {
		return(
				<View>
					<View style={styles.mapContainer}>
						<RouteMap
								style={styles.map}
								initialRegion={this.props.initialRegion}
								markers={this.props.route.markers}
						/>
					</View>
					<Label>{this.props.route.title}</Label>
					<TextArea>{this.props.route.text}</TextArea>
					<Divider/>
					<MarkerCardList data={this.props.route.markers} onPress={this.props.onMarkerClick} style={styles.card}/>
				</View>
		)
	}
	
}

const styles = StyleSheet.create({
	
	mapContainer: {
		height: 300,
		width: '100%',
		marginBottom: 20
	},
	
	map: {
		width: '100%',
		height: '100%'
	},
	
	card: {
		width: '95%',
		alignSelf: 'center'
	}
})

RouteView.propTypes = {
	initialRegion: RegionShape,
	route: RouteShape,
	onMarkerClick: PropTypes.func,
}