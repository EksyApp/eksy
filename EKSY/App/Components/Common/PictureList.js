import React, {Component} from 'react'
import {ListView, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'
import Picture from './Picture'

class PictureList extends Component {

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
				    renderRow = {(picture) => <Picture imageStyle={this.props.imageStyle} containerStyle={[style.imageContainer, this.props.imageContainerStyle]} data={picture} />}
						enableEmptySections={true}
				/>
		)
	}
}

const style = StyleSheet.create({
	imageContainer: {
		marginTop: 10
	}
})

PictureList.propTypes = {
	data: PropTypes.arrayOf(PropTypes.shape({
		uri: PropTypes.string.isRequired
	})),
}

export default PictureList
