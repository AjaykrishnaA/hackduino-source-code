import firebase from "firebase" ;
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAVFAXT6iXpRVsEng7fXOxFGRjFqKEHqWI",
    databaseURL: "https://fbmessenger-1aab6.firebaseio.com",
    projectId: "fbmessenger-1aab6",
    storageBucket: "fbmessenger-1aab6.appspot.com",
    messagingSenderId: "1092809255252",
    appId: "1:1092809255252:web:62f96a20e9685ad83cc0c1",
    measurementId: "G-XCHTFJNEWR"
});

const db = firebaseApp.firestore();

export default db ; 