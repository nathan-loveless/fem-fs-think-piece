import firebase from 'firebase/app';
import 'firebase/firestore';

  const config = {
    apiKey: "AIzaSyCc0tUIu8CFqT-o19Ox8d8eWkZBMSTaE-I",
    authDomain: "think-piece-nl.firebaseapp.com",
    databaseURL: "https://think-piece-nl.firebaseio.com",
    projectId: "think-piece-nl",
    storageBucket: "think-piece-nl.appspot.com",
    messagingSenderId: "376958775231",
    appId: "1:376958775231:web:2cabaaea5216689c82bb0a",
    measurementId: "G-YX4ENYCGZN"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  export const firestore = firebase.firestore();

  //firestore.settings({timestampsInSnapshots: true});

  window.firebase = firebase;

  export default firebase;