import React, {Component} from 'react'
import {ListView} from 'react-native'
import PropsTypes from 'prop-types'
import Image from './Image'

class ImageList extends Component {
	
	constructor(props) {
		super(props)
		
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => {
				return r1.props.url !== r2.props.url
			}
		})
		
		this.state = {
			dataSource: ds.cloneWithRows(this.props.children)
		}
	}
	
	render() {
		return (
				<ListView
						dataSource={this.state.dataSource}
				    renderRow = {(image) => image}
				/>
				
		)
	}
}

ImageList.propTypes = {
	children: PropsTypes.arrayOf(PropsTypes.Image)
}

export default ImageList