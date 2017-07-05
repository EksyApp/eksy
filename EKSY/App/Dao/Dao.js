import FirebaseDao from './FirebaseDao'

class Dao {
	
	static usedDAO = new FirebaseDao()
	
	constructor() {
		return Dao.usedDAO;
	}
	
}

export default Dao