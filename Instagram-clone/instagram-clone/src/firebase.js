import firebase from "firebase" ;
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA-ASmr2ucD128hWdW2wihqCsV7GGqzyIQ",
    authDomain: "instagram-clone-15d14.firebaseapp.com",
    databaseURL: "https://instagram-clone-15d14.firebaseio.com",
    projectId: "instagram-clone-15d14",
    storageBucket: "instagram-clone-15d14.appspot.com",
    messagingSenderId: "320429547956",
    appId: "1:320429547956:web:ab3808015f961883f992e1",
    measurementId: "G-CEKLNLT7D4"
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();



export  { auth, storage, db } ; 