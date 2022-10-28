import firebase from 'firebase/app';
import 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDNEzu3JL9n-psoFFnMUMLBrs9br3aNMY",
  authDomain: "myblog-f44bd.firebaseapp.com",
  projectId: "myblog-f44bd",
  storageBucket: "myblog-f44bd.appspot.com",
  messagingSenderId: "586325403779",
  appId: "1:586325403779:web:07c877b43dd874228393b6",
  measurementId: "G-9EZYZDY67J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firestore = firebase.firestore();
