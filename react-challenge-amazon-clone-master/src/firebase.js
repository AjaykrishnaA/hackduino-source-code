// import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyCcPSKlYtpdzBoAC8soeSmIARMzVKzrf5I",
//   authDomain: "challenge-4b2b2.firebaseapp.com",
//   databaseURL: "https://challenge-4b2b2.firebaseio.com",
//   projectId: "challenge-4b2b2",
//   storageBucket: "challenge-4b2b2.appspot.com",
//   messagingSenderId: "962418448875",
//   appId: "1:962418448875:web:f6cce5eeaf819481f661ae",
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { db, auth };

import firebase from "firebase" ;

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBSj4txREr0Tq5zKDP0T1JwU2-1I80vJ4k",
    authDomain: "clone-6fa72.firebaseapp.com",
    databaseURL: "https://clone-6fa72.firebaseio.com",
    projectId: "clone-6fa72",
    storageBucket: "clone-6fa72.appspot.com",
    messagingSenderId: "356095224560",
    appId: "1:356095224560:web:d2760fa375fb0babbdb035",
    measurementId: "G-MQY93V07WN"
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export  { auth, db } ; 