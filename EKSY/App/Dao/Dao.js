import FirebaseDao from './FirebaseDao'

class Dao {

	// static usedDAO = new FirebaseDao()

	constructor() {
		return new FirebaseDao();
	}

}

export default Dao
