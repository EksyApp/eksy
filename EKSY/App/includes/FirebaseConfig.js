import * as firebase from 'firebase'

class FirebaseConfig {
  /**
  * Initialises Firebase
  */
  static initialise () {
    if (firebase.apps.length === 0) {
      firebase.initializeApp({
        apiKey: 'AIzaSyDUYxAxhadl9mxPg3U0nn2eTwsjpzvZiSk',
        authDomain: 'eksyapp-1495447025903.firebaseapp.com',
        databaseURL: 'https://eksyapp-1495447025903.firebaseio.com',
        storageBucket: 'eksyapp-1495447025903.appspot.com'
      })
    } else {
    }
  }
}

export default FirebaseConfig

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
