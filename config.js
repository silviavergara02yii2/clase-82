import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyC8iGjt5JGhFgCtDKi2su5unBiXbYriq8U",
  authDomain: "library-a9ada.firebaseapp.com",
  projectId: "library-a9ada",
  storageBucket: "library-a9ada.appspot.com",
  messagingSenderId: "717390188469",
  appId: "1:717390188469:web:95b6139f8a3687ee3093fc"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
