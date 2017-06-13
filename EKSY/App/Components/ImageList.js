import React, {Component} from 'react'
import {FlatList} from 'react-native'
import PropTypes from 'prop-types'
import Image from './Image'

class ImageList extends Component {
	
	render() {
		return (
				<FlatList
						data={this.props.data}
				    renderItem = {(image) => <Image uri={image.uri} />}
				    horizontal={this.props.horizontal}
				/>
		)
	}
}

ImageList.propTypes = {
	data: PropTypes.arrayOf(PropTypes.shape({
		uri: PropTypes.string.isRequired
	})),
	horizontal: PropTypes.bool
}

export default ImageList