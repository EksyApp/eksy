import React, {Component} from 'react'
import {ListView, View, StyleSheet} from 'react-native'
import Image from "./Image";
import { ImagesShape, StyleShape } from '../../Utils/PropTypeShapes'

const imagesPerRow = 4

export default class CompactPictureList extends Component {
	
	constructor(props) {
		super(props)
		
		if(this.props.data == null) {
			this.props.data = []
		}
		
		const datasource = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2})
		
		this.state = {
			dataSource: datasource.cloneWithRows(this._makeGroups(this.props.data, imagesPerRow))
		}
		
	}
	
	componentWillReceiveProps(props) {
		if(props.data !== this.props.data) {
			if(this.props.data == null) {
				this.props.data = []
			}
			const dataSource = this.state.dataSource.cloneWithRows(this._makeGroups(props.data, imagesPerRow) || []);
			this.setState({dataSource})
		}
	}
	
	_makeGroups(data, itemsPerGroup) {
		let groups = []
		if(data) {
			for (var i = 0; i < data.length; i += itemsPerGroup) {
				let group = []
				for (var j = i; j < Math.min(data.length, i+itemsPerGroup); j++) {
					group.push(data[j])
				}
				groups.push(group)
			}
		}
		return groups
	}
	
	renderImageRow(data) {
		return(
				<View style={styles.rowContainer}>
					{data.map((datum, index) => {
						return(
								<View style={styles.imageContainer} key={index}>
									<Image source={{uri: datum.uri}} style={styles.image} />
								</View>
						)
					})}
				</View>
		)
	}
	
	render() {
		return(
				<ListView
						style = {this.props.listStyle}
						dataSource={this.state.dataSource}
						renderRow = {(data) => this.renderImageRow(data)}
						enableEmptySections={true}
				/>
		)
	}
	
}

const styles = StyleSheet.create({
	rowContainer: {
		height: 100,
		flexDirection: 'row'
	},
	
	imageContainer: {
		width: 100/imagesPerRow + "%",
		justifyContent: 'center',
		height: '100%',
	},
	
	image: {
		width: '100%',
		height: '100%',
		resizeMode: 'cover'
	}
})

CompactPictureList.propTypes = {
	data: ImagesShape,
	listStyle: StyleShape
}