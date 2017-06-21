import React from 'react'
import 'react-native'
import {shallow} from 'enzyme'
import {AddMarker} from "../App/Containers/AddMarker";
import MapManager from "../App/Map/MapManager";

MapManager.prototype.startLocationWatcher = jest.fn()
MapManager.prototype.storeListener = jest.fn()
MapManager.prototype.goToCurrentPosition = jest.fn()
MapManager.prototype.flyToPosition = jest.fn()

jest.mock('react-native-router-flux', () => ({
	Actions: {
		mapView: jest.fn()
	}
}))

let currentRegion = {
	latitude: 60.184356,
	longitude: 24.949326,
	latitudeDelta: 0.1,
	longitudeDelta: 0.1,
}

// let addMarker = shallow(<AddMarker currentRegion={currentRegion} />);
let mapManager = new MapManager();

describe("AddMarker", () => {
	
	beforeEach(() => {
		// mapManager.getMarkers().length = 0;
		// addMarker.instance().setState({
		// 	text: '',
		// 	title: '',
		// 	uri: '',
		// 	images: [],
		// 	imageResponse: ""
		// })
		// addMarker.update()
	})
	
	it('Adds a marker without content', () => {
		let addMarker = shallow(<AddMarker currentRegion={currentRegion}/>);
		addMarker.find('Button').last().simulate('press')
		expect(mapManager.getMarkers()[0].props.latitude).toBe(currentRegion.latitude)
		expect(mapManager.getMarkers()[0].props.longitude).toBe(currentRegion.longitude)
	})
	
	it('Adds a marker with title', () => {
		let addMarker = shallow(<AddMarker currentRegion={currentRegion}/>);
		addMarker.find('[label="Title"]').simulate('changeText', "A Nice Title")
		addMarker.find('Button').last().simulate('press')
		expect(mapManager.getMarkers()[1].props.title).toBe("A Nice Title")
	})
	
	it('Adds a marker with text', () => {
		let addMarker = shallow(<AddMarker currentRegion={currentRegion}/>);
		addMarker.find('[label="Text"]').simulate('changeText', "Some great text")
		addMarker.find('Button').last().simulate('press')
		expect(mapManager.getMarkers()[2].props.text).toBe("Some great text")
	})
	
	it('Adds a marker with a title and text', () => {
		let addMarker = shallow(<AddMarker currentRegion={currentRegion}/>);
		addMarker.find('[label="Title"]').simulate('changeText', "A Nice Title")
		addMarker.find('[label="Text"]').simulate('changeText', "Some great text")
		addMarker.find('Button').last().simulate('press')
		expect(mapManager.getMarkers()[3].props.title).toBe("A Nice Title")
		expect(mapManager.getMarkers()[3].props.text).toBe("Some great text")
	})
	
	it('Adds a marker with a valid Image', () => {
		let addMarker = shallow(<AddMarker currentRegion={currentRegion}/>);
		addMarker.find('[label="Image URL"]').simulate('changeText', "http://static.wixstatic.com/media/88e4c2_dde3ecf82909493f94bb32a60fe1a8c6~mv2.jpg")
		addMarker.find('Button').first().simulate('press')
		return new Promise(resolve => setTimeout(resolve, 20)).then(() => {
			addMarker.find('Button').last().simulate('press')
			expect(mapManager.getMarkers()[4].props.images[0].uri).toBe("http://static.wixstatic.com/media/88e4c2_dde3ecf82909493f94bb32a60fe1a8c6~mv2.jpg")
		})
	})
	
	// it('Doesnt add an image when URL is invalid', () => {
	// 	let addMarker = shallow(<AddMarker currentRegion={currentRegion}/>);
	// 	addMarker.find('[label="Image URL"]').simulate('changeText', "http://www.google.com")
	// 	addMarker.find('Button').first().simulate('press')
	// 	return new Promise(resolve => setTimeout(resolve, 20)).then(() => {
	// 		addMarker.find('Button').last().simulate('press')
	// 		expect(mapManager.getMarkers()[5].props.images.length).toBe(0)
	// 	})
	// })
	
})