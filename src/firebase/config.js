import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBnklm5f5jja2Ols9n09gqrhoWjax0-0wc",
    authDomain: "cyrrus-gallery.firebaseapp.com",
    projectId: "cyrrus-gallery",
    storageBucket: "cyrrus-gallery.appspot.com",
    databaseURL: "https://cyrrus-gallery-default-rtdb.europe-west1.firebasedatabase.app/",
    messagingSenderId: "644381412269",
    appId: "1:644381412269:web:1336d744bf755d71ce6f24",
    measurementId: "G-WGF383HTDW"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectStorage, projectFirestore, timestamp }




