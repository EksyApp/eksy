import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import MapComponent from "../../App/Components/MainView/Map/MapComponent";

jest.mock('react-native-fetch-blob', () => {
	return {
		DocumentDir: () => {},
    fetch: () => {},
    base64: () => {},
    android: () => {},
    ios: () => {},
    config: () => {},
    session: () => {},
    fs: {
      dirs: {
        MainBundleDir: () => {},
        CacheDir: () => {},
        DocumentDir: () => {},
      },
    },
    wrap: () => {},
		polyfill: {
			Fetch: class Fetch {
				constructor(params) {

				}

				build = jest.fn()
			}
		},
    JSONStream: () => {}
	}
})

jest.mock('../../App/Utils/MapManager', () => {
	class MapManagerMock {
		constructor() {

		}

		startLocationWatcher = jest.fn()
		storeListener = jest.fn()
		goToCurrentPosition = jest.fn()
		flyToPosition = jest.fn()
		setMapObject = jest.fn()
	}

	return MapManagerMock
})

test('MapComponent renders correctly', () => {
	const tree = renderer.create(
			<MapComponent
					currentRegion={{
						latitude: 1,
						longitude: 1,
						latitudeDelta: 1
					}}

			    currentLocation={{
			    	isKnown: false
			    }}

			    markerList={[]}
			/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});
