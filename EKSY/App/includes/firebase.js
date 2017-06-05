
import * as firebase from 'firebase'

class Firebase {

  /**
  * Initialises Firebase
  */
  static initialise () {
    if (!firebase) {
      firebase.initializeApp({
        apiKey: 'AIzaSyDUYxAxhadl9mxPg3U0nn2eTwsjpzvZiSk',
        authDomain: 'eksyapp-1495447025903.firebaseapp.com',
        databaseURL: 'https://eksyapp-1495447025903.firebaseio.com',
        storageBucket: 'eksyapp-1495447025903.appspot.com'
      })
    } else {
      return firebase.app()
    }
  }
}

export default Firebase

// async logout() {
//
//     try {
//
//         await firebase.auth().signOut();
//
//         // Navigate to login view
//
//     } catch (error) {
//         console.log(error);
//     }
//
// }
