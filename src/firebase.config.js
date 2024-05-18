// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAqmqgLkNxnzblwUIKI0ikeV4YfPT1ZmQ",
  authDomain: "computershop-254.firebaseapp.com",
  databaseURL: "https://computershop-254-default-rtdb.firebaseio.com",
  projectId: "computershop-254",
  storageBucket: "computershop-254.appspot.com",
  messagingSenderId: "90702954375",
  appId: "1:90702954375:web:6ea04360703fc61e2a1d22",
  measurementId: "G-STY9N4E6BS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
