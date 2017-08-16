import React, {Component} from 'react'
import {ListView, View, StyleSheet} from 'react-native'
import Card from '../Common/Card'
import {Icon} from 'react-native-elements'
import Label from '../Common/Label'

export default class EditableMarkerList extends Component {
	
	constructor(props) {
		super(props)
		
		this.dataSource = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2})
		
		this.state = {
			markers: this.props.markers
		}
		
	}
	
	componentWillReceiveProps(props) {
		if(props.data !== this.props.data) {
			let markers = props.markers
			this.setState({markers})
		}
	}
	
	
	deleteRow(delIndex) {
		this.setState({markers: this.state.markers.filter((marker, index) => index !== delIndex)}, () => {this.props.onChange(this.state.markers)})
	}
	
	swapRows(index, change) {
		let markers = this.state.markers
		if(index+change >= 0 && index+change < markers.length) {
			let row = markers[index]
			markers[index] = markers[index+change]
			markers[index+change] = row
			this.setState({markers}, () => this.props.onChange(this.state.markers))
		}
	}
	
	render() {
		this.dataSource = this.dataSource.cloneWithRows(this.state.markers || [])
		return(
				<ListView
						dataSource={this.dataSource}
						renderRow = {(marker, sectionID, rowID) => {
							return(
									<Row
											marker={marker}
											index={rowID}
											onRowDelete={(index) => {this.deleteRow(index)}}
											onRowSwap={(index, change) => {this.swapRows(index, change)}}
									/>
							)
						}}
						enableEmptySections={true}
				/>
		)
	}
	
	
}

class Row extends Component {

	render() {
		return(
				<Card style={styles.rowContainer}>
					<View style={styles.endIconContainer}>
						<Icon
								name="delete"
								size={35}
								onPress={() => this.props.onRowDelete(this.props.index)}
						/>
					</View>
					<View style={styles.titleContainer}>
						<Label>{this.props.marker.title}</Label>
					</View>
					<View style={styles.endIconContainer}>
						<View>
							<Icon
									name="keyboard-arrow-up"
									size={35}
									onPress={() => this.props.onRowSwap(this.props.index, -1)}
							/>
						</View>
						<View>
							<Icon
									name="keyboard-arrow-down"
									size={35}
									onPress={() => this.props.onRowSwap(this.props.index, 1)}
							/>
						</View>
					</View>
				</Card>
		)
	}
	
}

const styles = StyleSheet.create({
	rowContainer: {
		width: '98%',
		flexDirection: 'row',
		minHeight: 80,
		justifyContent: 'center',
		marginBottom: 20
	},
	
	endIconContainer: {
		width: 35,
		alignItems: 'center',
		justifyContent: 'center',
	},
	
	titleContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	}
})
