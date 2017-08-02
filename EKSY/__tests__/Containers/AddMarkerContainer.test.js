import React from 'react'
import {shallow} from 'enzyme'
import {AddMarkerContainer} from "../../App/Containers/AddMarker/AddMarkerContainer";
import MapManager from "../../App/Utils/MapManager"
import renderer from 'react-test-renderer'
import Filters from '../../App/Data/Filters'

MapManager.prototype.startLocationWatcher = jest.fn()
MapManager.prototype.storeListener = jest.fn()
MapManager.prototype.goToCurrentPosition = jest.fn()
MapManager.prototype.flyToPosition = jest.fn()

jest.mock('react-native-router-flux', () => ({
	Actions: {
		pop: jest.fn()
	}
}))



jest.mock('firebase', () => ({
  initializeApp () {
    return {}
  },
  database () {
    return {
      ref() {
        return {}
      }
    }
  },
}))


let currentRegion = {
	latitude: 60.184356,
	longitude: 24.949326,
	latitudeDelta: 0.1,
	longitudeDelta: 0.1,
}

jest.mock('react-native-fetch-blob', () => {
	return {
		DocumentDir: () => {},
		polyfill: () => {}
	}
})

/*describe("AddMarkerContainer", () => {

	this.addNewMarkerMock = jest.fn()

	this.addNewMarkerMock.bind(this)
	

	it('Adds a marker without content', () => {
		let addMarker = shallow(<AddMarkerContainer currentRegion={currentRegion} addNewMarker={this.addNewMarkerMock} />);
		addMarker.find('Button').last().simulate('press')
		expect(this.addNewMarkerMock).toBeCalledWith({
			latitude: currentRegion.latitude,
			longitude: currentRegion.longitude,
			text: '',
			title: '',
			images: [],
			filters: []
		})
	})

	it('Adds a marker with title', () => {
		let addMarker = shallow(<AddMarkerContainer currentRegion={currentRegion} addNewMarker={this.addNewMarkerMock} />);
		addMarker.find('[label="Title"]').simulate('changeText', "A Nice Title")
		addMarker.find('Button').last().simulate('press')
		expect(this.addNewMarkerMock).toBeCalledWith({
			latitude: currentRegion.latitude,
			longitude: currentRegion.longitude,
			text: '',
			title: 'A Nice Title',
			images: [],
			filters: []
		})
	})

	it('Adds a marker with text', () => {
		let addMarker = shallow(<AddMarkerContainer currentRegion={currentRegion} addNewMarker={this.addNewMarkerMock} />);
		addMarker.find('[label="Text"]').simulate('changeText', "Some great text")
		addMarker.find('Button').last().simulate('press')
		expect(this.addNewMarkerMock).toBeCalledWith({
			latitude: currentRegion.latitude,
			longitude: currentRegion.longitude,
			text: 'Some great text',
			title: '',
			images: [],
			filters: []
		})
	})

	it('Adds a marker with a title and text', () => {
		let addMarker = shallow(<AddMarkerContainer currentRegion={currentRegion} addNewMarker={this.addNewMarkerMock} />);
		addMarker.find('[label="Title"]').simulate('changeText', "A Nice Title")
		addMarker.find('[label="Text"]').simulate('changeText', "Some great text")
		addMarker.find('Button').last().simulate('press')
		expect(this.addNewMarkerMock).toBeCalledWith({
			latitude: currentRegion.latitude,
			longitude: currentRegion.longitude,
			text: 'Some great text',
			title: 'A Nice Title',
			images: [],
			filters: []
		})
	})

	it('Adds a marker with a valid FastImage', () => {
		let addMarker = shallow(<AddMarkerContainer currentRegion={currentRegion} addNewMarker={this.addNewMarkerMock} />);
		addMarker.find('[label="FastImage URL"]').simulate('changeText', "http://static.wixstatic.com/media/88e4c2_dde3ecf82909493f94bb32a60fe1a8c6~mv2.jpg")
		addMarker.find('Button').first().simulate('press')
		return new Promise(resolve => setTimeout(resolve, 20)).then(() => {
			addMarker.find('Button').last().simulate('press')
			expect(this.addNewMarkerMock).toBeCalledWith({
				latitude: currentRegion.latitude,
				longitude: currentRegion.longitude,
				text: '',
				title: '',
				images: ["http://static.wixstatic.com/media/88e4c2_dde3ecf82909493f94bb32a60fe1a8c6~mv2.jpg"]
			})
		})
	})

	it('imageurlerror sets state correctly', () => {
		let addMarker = shallow(<AddMarkerContainer currentRegion={currentRegion} addNewMarker={this.addNewMarkerMock} />);
		expect(addMarker.instance().state.imageResponse).toBe("")
		addMarker.instance()._imageUrlError()
		expect(addMarker.instance().state.imageResponse).toBe("URL not valid")
	})

	it('Doesnt add an image when URL is invalid', () => {
		return new Promise(resolve => setTimeout(resolve, 50)).then(() => {
			let addMarker = shallow(<AddMarkerContainer currentRegion={currentRegion}/>);
			addMarker.find('[label="FastImage URL"]').simulate('changeText', "http://www.google.com")
			console.log(addMarker.instance().state)
			addMarker.find('Button').first().simulate('press')
			return new Promise(resolve => setTimeout(resolve, 20)).then(() => {
				addMarker.find('Button').last().simulate('press')
				//expect(mapManager.getMarkers()[5].props.images.length).toBe(0)
				expect(mapManager.getMarkers()[5].props.images[0].width).toBe("http://static.wixstatic.com/media/88e4c2_dde3ecf82909493f94bb32a60fe1a8c6~mv2.jpg")
			})
		})
	})

})*/