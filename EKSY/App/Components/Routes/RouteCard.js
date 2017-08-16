import React, {Component} from 'react'
import Card from '../Common/Card'
import {TouchableWithoutFeedback} from 'react-native'
import CardSection from '../Common/CardSection'
import Label from '../Common/Label'
import TextArea from '../Common/TextArea'

export default class RouteCard extends Component {
	
	render() {
		return(
				<TouchableWithoutFeedback onPress={() => this.props.onPress(this.props.route)}>
					<Card style={[styles.container, {width: this.props.width}, this.props.style]}>
						<CardSection style={styles.infoContainer}>
							<Label style={styles.title}>{this.props.route.title}</Label>
						</CardSection>
						
						<TextArea>{this.props.route.text}</TextArea>
					</Card>
				</TouchableWithoutFeedback>
		)
	}
	
}

const styles = StyleSheet.create({
	container: {
		height: 200,
		marginLeft: 0,
		width: '100%'
	},
	
	infoContainer: {
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
		overflow: "scroll"
	},
	
	title: {
		marginTop: 10
	}
	
});