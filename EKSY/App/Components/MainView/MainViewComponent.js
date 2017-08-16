import React, {Component} from 'react'
import MenuButton from '../../Components/Common/MenuButton'
import {View, StyleSheet} from 'react-native'
import MarkerModalContainer from "../../Containers/MainView/MarkerModal/MarkerModalContainer";
import BottomSheetContainer from "../../Containers/MainView/BottomSheet/BottomSheetContainer";
import MapContainer from "../../Containers/MainView/Map/MapContainer";
import PropTypes from 'prop-types'

class MainViewComponent extends Component {
	
	render() {
		return (
				<View style={styles.container}>
					<MapContainer />
					<View style={styles.container}>
						<BottomSheetContainer />
						<MarkerModalContainer/>
					</View>
					<MenuButton onPress={() => {this.props.menuButtonPress()}}/>
				</View>
		)
	}
}


const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
	}
})


MainViewComponent.propTypes = {
	menuButtonPress: PropTypes.func
}
export default MainViewComponent