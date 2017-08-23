import * as GeoFire from 'geofire'

export default class Geometry {
	
	static distance(start, end) {
		return GeoFire.distance([start.latitude, start.longitude], [end.latitude, end.longitude])
	}
	
	static getPointOnRadius(start, end, radius) {
		
		let distance = Geometry.distance(start, end)
		let multiplier = (radius / distance)
		let latitude = start.latitude + multiplier * (end.latitude - start.latitude)
		let longitude = start.longitude + multiplier * (end.longitude - start.longitude)
		
		return {latitude, longitude}
		
	}
}

