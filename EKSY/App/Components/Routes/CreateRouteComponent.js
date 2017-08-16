import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import * as Theme from '../../Theme'
import Header from '../Common/Header'
import RouteForm from './RouteForm'
import Button from '../Common/Button'
import PropTypes from 'prop-types'
import {MarkersShape} from "../../Utils/PropTypeShapes";

export default class CreateRouteComponent extends Component {
	
	render() {
		return(
				<View style={styles.container}>
					<Header backButton title="Create a route"/>
					<View>
						<RouteForm
								initialTitle=""
								onTitleChange={this.props.onTitleChange}
								
								initialText=""
								onTextChange={this.props.onTextChange}
								
								markers={this.props.markers}
								onMarkerListChange={this.props.onMarkerListChange}
						/>
						<Button onPress={this.props.onCreateClick}>
							Create
						</Button>
					</View>
				</View>
		)
	}
	
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Theme.backgroundColor
	}
})

CreateRouteComponent.propTypes= {
	markers: MarkersShape,
	onMarkerListChange: PropTypes.func
}
