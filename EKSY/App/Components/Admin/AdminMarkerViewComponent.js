import React, {Component} from 'react'
import Header from '../Common/Header'
import {View, StyleSheet, ScrollView} from 'react-native'
import {Actions} from 'react-native-router-flux'
import * as Theme from '../../Theme'
import Button from '../Common/Button'
import MarkerView from '../Common/MarkerView'
import PropTypes from 'prop-types'
import {RegionShape, MarkerShape} from '../../Utils/PropTypeShapes'
import Container from '../Common/Container'

//Renders view for admin to manage a marker
//Admin can accept or reject the markers
//Edit button takes to EditMarker
export default class AdminMarkerViewComponent extends Component {

	render() {
		return(
				<View style={styles.container}>
					<Header title="Confirm Marker" backButton />
					<ScrollView style={styles.container}>
						<MarkerView
								marker={this.props.marker}
								currentRegion={this.props.currentRegion}
						/>
						<Button onPress={this.props.onAcceptClick}>
							Accept
						</Button>
						<Button onPress={this.props.onRejectClick}>
							Reject
						</Button>
						<Button onPress={this.props.onEditClick}>
							Edit
						</Button>
					</ScrollView>

				</View>

		return (
				<Container title="Confirm Marker" backButton>
					<MarkerView
							marker={this.props.marker}
							currentRegion={this.props.currentRegion}
					/>
					<Button onPress={this.props.onAcceptClick}>
						Accept
					</Button>
					<Button onPress={this.props.onRejectClick}>
						Reject
					</Button>
					<Button onPress={this.props.onEditClick}>
						Edit
					</Button>
				</Container>
		)
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Theme.backgroundColor
	}
})

AdminMarkerViewComponent.propTypes = {
	marker: MarkerShape,
	currentRegion: RegionShape,
	onAcceptClick:PropTypes.func,
	onRejectClick:PropTypes.func,
	onEditClick:PropTypes.func,
}
	onAcceptClick: PropTypes.func,
	onRejectClick: PropTypes.func,
	onEditClick: PropTypes.func,
}
