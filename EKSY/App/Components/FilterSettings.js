import React, {Component} from 'react'
import {View} from 'react-native'
import CheckboxList from "./CheckboxList";
import Divider from "./Common/Divider";
import Label from "./Common/Label";

export default class FilterSettings extends Component {
	
	render() {
		return(
				<View>
					<Divider />
					<Label>Filters</Label>
					<CheckboxList data={this.props.data} onPress={(name, checked) => {this.props.onPress(name, checked)}} />
				</View>
		)
	}
	
}