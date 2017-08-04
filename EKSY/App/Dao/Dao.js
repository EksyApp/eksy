import FirebaseDao from './FirebaseDao'

class Dao {

	static usedDAO = null;

	constructor() {
		if(Dao.usedDAO == null) {
			Dao.usedDAO = new FirebaseDao();
		}
		return Dao.usedDAO;
	}
	
}

export default Dao
