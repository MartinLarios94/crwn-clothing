import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBOGvvHdlnGgSaP1PwzqYmhjkXVLu6s_C4",
    authDomain: "crwn-db-f32bc.firebaseapp.com",
    databaseURL: "https://crwn-db-f32bc.firebaseio.com",
    projectId: "crwn-db-f32bc",
    storageBucket: "crwn-db-f32bc.appspot.com",
    messagingSenderId: "400923671232",
    appId: "1:400923671232:web:277af7545d6636cf9d4b25",
    measurementId: "G-EWMZ6674WT"
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;