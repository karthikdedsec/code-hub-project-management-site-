import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB5NuQuuqOeOa3GMHBAUsx7sTKSssKSM7U",
  authDomain: "thecodehub-fdc5e.firebaseapp.com",
  projectId: "thecodehub-fdc5e",
  storageBucket: "thecodehub-fdc5e.appspot.com",
  messagingSenderId: "650461690931",
  appId: "1:650461690931:web:929fa0d27b99e8aac37746",
};

//init firebase

firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();
//timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
