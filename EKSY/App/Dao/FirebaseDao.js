import firebase from 'firebase'



class FirebaseDao {
	
	static instance = null;
	
	constructor() {
		if(FirebaseDao.instance == null) {
			FirebaseDao.instance = this;
		}
		return FirebaseDao.instance;
	}
	
	async addUser() {
		let reference =  await firebase.database().ref("/users/" + firebase.auth().currentUser.uid)
		reference.set({
			email: firebase.auth().currentUser.email
		})
	}
	
	async addMarker(marker) {
	
	}
	
}

export default FirebaseDao