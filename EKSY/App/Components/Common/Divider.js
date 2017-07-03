import React, {Component} from 'react'
import * as Elements from 'react-native-elements'
import {StyleSheet} from 'react-native'
import * as Theme from '../../Theme'

export class Divider extends Component {

	render() {
		return(
				<Elements.Divider {...this.props} style={[style.divider, this.props.style]}/>
		)
	}

}

const style = StyleSheet.create({
	divider: {
		height: 1,
		margin: 3,
		marginLeft: 10,
		marginRight: 10,
		backgroundColor: Theme.detailColor
	}
})

export default Divider
