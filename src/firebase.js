import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDd1TXXVX5_hB8F_JKqBKZhAIOcLt_qKuk",
  authDomain: "clone-5eeee.firebaseapp.com",
  projectId: "clone-5eeee",
  storageBucket: "clone-5eeee.appspot.com",
  messagingSenderId: "916979165963",
  appId: "1:916979165963:web:32fdd1d131fc5b6e0a900e",
  measurementId: "G-RR6PF34YM1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
