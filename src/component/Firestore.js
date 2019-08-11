import firebase from 'firebase';
// import 'firebase/firestore';

  // Initialize Firebase
const config = {
  apiKey: "AIzaSyAoen1ei96nVtVJseYyVPkvLGmDBdax3v4",
  authDomain: "devo-e8761.firebaseapp.com",
  databaseURL: "https://devo-e8761.firebaseio.com",
  projectId: "devo-e8761",
  storageBucket: "devo-e8761.appspot.com",
  messagingSenderId: "463303271770"
};
firebase.initializeApp(config);

export default firebase;



