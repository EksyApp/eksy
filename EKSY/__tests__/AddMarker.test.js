import React from 'react'
import ReactNative from '../_mocks_/setup'
import {shallow} from 'enzyme'
import {AddMarker} from "../App/Containers/AddMarker";
import MapManager from "../App/Containers/Map/MapManager"
import renderer from 'react-test-renderer'

MapManager.prototype.startLocationWatcher = jest.fn()
MapManager.prototype.storeListener = jest.fn()
MapManager.prototype.goToCurrentPosition = jest.fn()
MapManager.prototype.flyToPosition = jest.fn()

jest.mock('react-native-router-flux', () => ({
	Actions: {
		pop: jest.fn()
	}
}))

jest.mock('react-native-fetch-blob', () => {
  return {
    DocumentDir: () => {},
    polyfill: () => {},
  }
});

let currentRegion = {
	latitude: 60.184356,
	longitude: 24.949326,
	latitudeDelta: 0.1,
	longitudeDelta: 0.1,
}

// let addMarker = shallow(<AddMarker currentRegion={currentRegion} />);
let mapManager = new MapManager();

jest.mock('react-native-maps', () => {
  const React = require.requireActual('react');
  const MapView = require.requireActual('react-native-maps');

  class MockCallout extends React.Component {
    render() {
      return React.createElement('Callout', this.props, this.props.children);
    }
  }

  class MockMarker extends React.Component {
    render() {
      return React.createElement('Marker', this.props, this.props.children);
    }
  }

  class MockMapView extends React.Component {
    render() {
      return React.createElement('MapView', this.props, this.props.children);
    }
  }

  MockCallout.propTypes = MapView.Callout.propTypes;
  MockMarker.propTypes = MapView.Marker.propTypes;
  MockMapView.propTypes = MapView.propTypes;
  MockMapView.Marker = MockMarker;
  MockMapView.Callout = MockCallout;
  return MockMapView;
});


describe("AddMarker", () => {

	it('renders correctly', () => {
	  const tree = renderer.create(
	    <AddMarker currentRegion={currentRegion}/>
	  ).toJSON();
	  expect(tree).toMatchSnapshot();
	});

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

	it('Adds a marker with a valid FastImage', () => {
		let addMarker = shallow(<AddMarker currentRegion={currentRegion}/>);
		addMarker.find('[label="FastImage URL"]').simulate('changeText', "http://static.wixstatic.com/media/88e4c2_dde3ecf82909493f94bb32a60fe1a8c6~mv2.jpg")
		addMarker.find('Button').first().simulate('press')
		return new Promise(resolve => setTimeout(resolve, 20)).then(() => {
			addMarker.find('Button').last().simulate('press')
			expect(mapManager.getMarkers()[4].props.images[0].uri).toBe("http://static.wixstatic.com/media/88e4c2_dde3ecf82909493f94bb32a60fe1a8c6~mv2.jpg")
		})
	})

	it('imageurlerror sets state correctly', () => {
		let addMarker = shallow(<AddMarker currentRegion={currentRegion}/>);
		expect(addMarker.instance().state.imageResponse).toBe("")
		addMarker.instance()._imageUrlError()
		expect(addMarker.instance().state.imageResponse).toBe("URL not valid")
	})

	//it('Doesnt add an image when URL is invalid', () => {
	//	return new Promise(resolve => setTimeout(resolve, 50)).then(() => {
	//		let addMarker = shallow(<AddMarker currentRegion={currentRegion}/>);
	//		addMarker.find('[label="FastImage URL"]').simulate('changeText', "http://www.google.com")
	//		console.log(addMarker.instance().state)
	//		addMarker.find('Button').first().simulate('press')
	//		return new Promise(resolve => setTimeout(resolve, 20)).then(() => {
	//			addMarker.find('Button').last().simulate('press')
	//			//expect(mapManager.getMarkers()[5].props.images.length).toBe(0)
	//			expect(mapManager.getMarkers()[5].props.images[0].width).toBe("http://static.wixstatic.com/media/88e4c2_dde3ecf82909493f94bb32a60fe1a8c6~mv2.jpg")
	//		})
	//	})
	//})

})
