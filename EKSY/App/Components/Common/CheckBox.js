import React, {Component} from 'react'
import {StyleSheet} from 'react-native'
import * as Theme from '../../Theme'
const BasicCheckBox = require('react-native-elements').CheckBox
import PropTypes from 'prop-types';
import {StyleShape} from "../../Utils/PropTypeShapes";

export class CheckBox extends Component {

	constructor(props) {
		super(props)

		this.state = {
			checked: this.props.checked != null ? this.props.checked : false
		}

	}

	componentWillReceiveProps(props) {
		if(this.props.name !== props.name) {
			this.setState({checked: props.checked !== null ? props.checked : this.state.checked})
		}
	}

	_handlePress() {
		this.setState({checked: !this.state.checked})
		this.props.onPress(this.props.name, !this.state.checked);
	}

	render() {
		return (
				<BasicCheckBox
						{...this.props}
						containerStyle={[style.checkboxContainer, this.props.containerStyle]}
						textStyle={[style.checkboxText, this.props.textStyle]}
						checked={this.state.checked}
						onPress={() => {this._handlePress()}}
				/>
		)

	}

}

const style = StyleSheet.create({
	checkboxContainer: {
		backgroundColor: Theme.frontgroundColor
	},

	checkboxText: {
		color: Theme.fontColor
	}
})

CheckBox.propTypes = {
	checked: PropTypes.bool,
	name: PropTypes.string,
	containerStyle: StyleShape,
	textStyle: StyleShape
}