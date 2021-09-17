import firebase from "firebase";
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAQadQGRw9DP66wKiGp8ZG2hHccQTtIV9w",
    authDomain: "funshot-d4d96.firebaseapp.com",
    projectId: "funshot-d4d96",
    storageBucket: "funshot-d4d96.appspot.com",
    messagingSenderId: "1057118979166",
    appId: "1:1057118979166:web:07f1996af9ee93c733a0cf"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth  = firebase.auth()
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp,auth };

