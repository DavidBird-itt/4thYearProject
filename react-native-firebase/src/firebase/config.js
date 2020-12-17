import firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

//todo
const firebaseConfig = {
    apiKey: "AIzaSyBGcR98S9pJurLAguzHrKHa2dRl0Ay6ok8",
    authDomain: "smartrecipe-618d7.firebaseapp.com",
    databaseURL: "https://smartrecipe-618d7.firebaseio.com",
    projectId: "smartrecipe-618d7",
    storageBucket: "smartrecipe-618d7.appspot.com",
    messagingSenderId: "31641794668",
    appId: "1:31641794668:web:5f3195e87fa0edf3738049",
    measurementId: "G-PW21TJW6B0"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };