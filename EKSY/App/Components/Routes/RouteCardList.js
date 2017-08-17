import React, {Component} from 'react'
import RouteCard from './RouteCard'
import {ListView} from 'react-native'
import {RoutesShape, StyleShape} from '../../Utils/PropTypeShapes'
import PropTypes from 'prop-types'

export default class RouteCardList extends Component {
	
	constructor(props) {
		super(props)
		
		const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
		
		this.state = {
			dataSource: dataSource.cloneWithRows(this.props.routes)
		}
		
	}
	
	componentWillReceiveProps(props) {
		if (props.routes !== this.props.routes) {
			const dataSource = this.state.dataSource.cloneWithRows(props.routes || [])
			this.setState({dataSource})
		}
	}
	
	render() {
		return (
				<ListView
						dataSource={this.state.dataSource}
						renderRow={(route) => {
							return (
									<RouteCard
											route={route}
											onPress={this.props.onPress}
											style={this.props.style}
									/>
							)
						}}
						enableEmptySections={true}
				/>
		
		)
	}
	
}

RouteCardList.propTypes = {
	routes: RoutesShape,
	onPress: PropTypes.func,
	style: StyleShape
}