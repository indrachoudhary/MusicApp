import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyA8FQZwKGcRfI7Yn0xuK1FjG7lyJHpYG6U",
    authDomain: "music-app-ebad3.firebaseapp.com",
    projectId: "music-app-ebad3",
    storageBucket: "music-app-ebad3.appspot.com",
    messagingSenderId: "160869383857",
    appId: "1:160869383857:web:1e4657e6b55b722514ac90"
  };

  let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const db = app.firestore();
const auth = firebase.auth();
export { db, auth };