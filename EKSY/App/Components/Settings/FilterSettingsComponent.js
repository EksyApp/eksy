import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import CheckBoxList from "../Common/CheckBoxList";
import Divider from "../Common/Divider";
import Label from "../Common/Label";
import PropTypes from 'prop-types'
import {FiltersShape} from "../../Utils/PropTypeShapes";

export default class FilterSettingsComponent extends Component {
	
	render() {
		return(
				<View>
					<Divider style={styles.divider} />
					<Label>Filters</Label>
					<CheckBoxList data={this.props.data} onPress={(name, checked) => {this.props.onPress(name, checked)}} />
				</View>
		)
	}
	
}

const styles = StyleSheet.create({
	divider: {
		marginTop: 30
	}
})

FilterSettingsComponent.propTypes = {
	data: FiltersShape,
	onPress: PropTypes.func
}