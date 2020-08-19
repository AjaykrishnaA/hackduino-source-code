import firebase from "firebase" ;
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAPAfNBtjqb93AOjdRhmJdhv83iuPQAOJQ",
    authDomain: "to-do-app-f0750.firebaseapp.com",
    databaseURL: "https://to-do-app-f0750.firebaseio.com",
    projectId: "to-do-app-f0750",
    storageBucket: "to-do-app-f0750.appspot.com",
    messagingSenderId: "612914036945",
    appId: "1:612914036945:web:faa7d50946e79c59e9c5f0",
    measurementId: "G-DGS58BNE3V"
});

const db = firebaseApp.firestore();

export default db ; 