// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCox6G5skMYFp3rFxWbNjHUsu1zxJsAhRA",
  authDomain: "kinte-chai.firebaseapp.com",
  databaseURL: "https://kinte-chai.firebaseio.com",
  projectId: "kinte-chai",
  storageBucket: "kinte-chai.appspot.com",
  messagingSenderId: "849681613479",
  appId: "1:849681613479:web:b847ff2e0b285b17981182",
  measurementId: "G-EVWNF382RG",
};

firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebase.auth();

export const firestore = firebase.firestore();

export default firebase;
