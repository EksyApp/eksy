import React, {Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';
import {Card, CardSection} from './Common'

export default class MarkerCard extends Component {
	render() {
		return (
				<View style={[styles.container, {width:this.props.width}]}>
					<Card>
						<CardSection>
							<Text>{this.props.marker.title}</Text>
						</CardSection>
						
						<CardSection>
							<Text>{this.props.marker.text}</Text>
						</CardSection>
						
						<CardSection>
						
						</CardSection>
					</Card>
				</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
	},
});
