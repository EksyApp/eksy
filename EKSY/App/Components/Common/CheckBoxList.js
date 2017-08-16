import React, {Component} from 'react'
import {CheckBox} from './index'
import {ListView} from 'react-native'
import PropTypes from 'prop-types';
import {FiltersShape, StyleShape} from '../../Utils/PropTypeShapes'

export default class CheckBoxList extends Component {
	
	constructor(props) {
		super(props)
		
		const datasource = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2})
		
		this.state = {
			dataSource: datasource.cloneWithRows(this.props.data)
		}
		
	}
	
	componentWillReceiveProps(props) {
		if(props.data !== this.props.data) {
			const dataSource = this.state.dataSource.cloneWithRows(props.data || []);
			this.setState({dataSource})
		}
	}
	
	render() {
		return (
				<ListView
						style = {this.props.listStyle}
						dataSource={this.state.dataSource}
						renderRow = {(checkbox) => <CheckBox
								checked={checkbox.checked}
								name={checkbox.name}
								title={this.props.titleKey ? checkbox[this.props.titleKey] : checkbox.stateDescription}
								onPress={(name, checked) => {this.props.onPress(name,checked)}}
						/>}
						enableEmptySections={true}
				/>
		)
	}
	
}

CheckBoxList.propTypes = {
	data: FiltersShape,
	listStyle: StyleShape,
	titleKey: PropTypes.string,
	onPress: PropTypes.func,
}