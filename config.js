import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyAUO_uvk1EpiebJ7g87R60gDBnng7yzyB0",
  authDomain: "pro-71-665ab.firebaseapp.com",
  databaseURL: "https://pro-71-665ab-default-rtdb.firebaseio.com",
  projectId: "pro-71-665ab",
  storageBucket: "pro-71-665ab.appspot.com",
  messagingSenderId: "287465194546",
  appId: "1:287465194546:web:6cdc0fce8660c838a2a82b"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
