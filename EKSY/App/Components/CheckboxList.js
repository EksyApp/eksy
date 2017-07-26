import React, {Component} from 'react'
import {CheckBox} from './Common/index'
import {ListView} from 'react-native'

export default class CheckboxList extends Component {
	
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
						renderRow = {(checkbox) => <CheckBox checked={checkbox.checked} name={checkbox.name} title={checkbox.stateDescription} onPress={(name, checked) => {this.props.onPress(name,checked)}} />}
				/>
		)
	}
	
}