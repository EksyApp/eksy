import React, {Component} from 'react'
import MenuButton from '../../Components/Common/MenuButton'
import {View, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import MarkerViewContainer from "../../Containers/MainView/MarkerView/MarkerViewContainer";
import BottomSheetContainer from "../../Containers/MainView/BottomSheet/BottomSheetContainer";
import MapContainer from "../../Containers/MainView/Map/MapContainer";


class MainViewComponent extends Component {
	
	render() {
		return (
				<View style={styles.container}>
					<MapContainer />
					<View style={styles.container}>
						<BottomSheetContainer />
						<MarkerViewContainer/>
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

export default MainViewComponent