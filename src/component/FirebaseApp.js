import app from 'firebase/app';
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

  // Initialize Firebase
const FirebaseApp = firebase.initializeApp ({
  apiKey: "AIzaSyAoen1ei96nVtVJseYyVPkvLGmDBdax3v4",
  authDomain: "devo-e8761.firebaseapp.com",
  databaseURL: "https://devo-e8761.firebaseio.com",
  projectId: "devo-e8761",
  storageBucket: "devo-e8761.appspot.com",
  messagingSenderId: "463303271770"
});

const auth = FirebaseApp.auth();
const db = FirebaseApp.firestore();

export default { db, auth };
