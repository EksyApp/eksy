import React, {Component} from 'react'
import {ListView} from 'react-native'
import PropTypes from 'prop-types'
import Picture from './Picture'

class PictureList extends Component {
	
	constructor(props) {
		super(props)
		
		const datasource = new ListView.DataSource({rowHasChanged: (r1,r2) => r1.uri !== r2.uri})
		this.state = {
			dataSource: datasource.cloneWithRows(this.props.data)
		}
		
	}
	
	render() {
		console.log(this.props)
		return (
				<ListView
						dataSource={this.state.dataSource}
				    renderRow = {(picture) => <Picture uri={picture.uri} />}
				/>
		)
	}
}

PictureList.propTypes = {
	data: PropTypes.arrayOf(PropTypes.shape({
		uri: PropTypes.string.isRequired
	})),
}

export default PictureList