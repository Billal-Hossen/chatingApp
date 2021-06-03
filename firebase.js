import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDRZNLOXN4pN-AuYsk26-35NpaWD8ynpjI",
  authDomain: "group-chat-a5188.firebaseapp.com",
  projectId: "group-chat-a5188",
  storageBucket: "group-chat-a5188.appspot.com",
  messagingSenderId: "420645356858",
  appId: "1:420645356858:web:59e8a502d710839f66fc03",
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
