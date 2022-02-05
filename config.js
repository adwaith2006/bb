import firebase from "firebase";

require("@firebase/firestore");
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPfcBT2W9wkw1SGKqdE2sx6z8E69FGueA",
  authDomain: "zooapp-e50ca.firebaseapp.com",
  projectId: "zooapp-e50ca",
  storageBucket: "zooapp-e50ca.appspot.com",
  messagingSenderId: "128359130554",
  appId: "1:128359130554:web:910f4241ebc866dd73e983",
  measurementId: "G-LQTQJJ636F"
};
firebase.initializeApp(firebaseConfig); 

  // Initialize Firebase



export default firebase.firestore();
