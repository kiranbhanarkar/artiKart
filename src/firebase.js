import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCBieGVWP6TdHp1yLop4y9KApgh_CD-djw",
    authDomain: "artikart-9c67e.firebaseapp.com",
    projectId: "artikart-9c67e",
    storageBucket: "artikart-9c67e.appspot.com",
    messagingSenderId: "798783305667",
    appId: "1:798783305667:web:3bc6b5eccaf778769caf76",
    measurementId: "G-9R1CKN3QFF"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };