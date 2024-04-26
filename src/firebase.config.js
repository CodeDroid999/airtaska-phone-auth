// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhlvPkdYdEmByHhdsTLVrASxAqP2pudjI",
  authDomain: "airtaska-authentication.firebaseapp.com",
  projectId: "airtaska-authentication",
  storageBucket: "airtaska-authentication.appspot.com",
  messagingSenderId: "480731115943",
  appId: "1:480731115943:web:96ef8da56cb97282d80682",
  measurementId: "G-P2NEXHW6X0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
