// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9DMyKKlKHxybCZqImW_Qt9V14lIWxSTc",
  authDomain: "northexpresskenya.firebaseapp.com",
  databaseURL: "https://northexpresskenya-default-rtdb.firebaseio.com",
  projectId: "northexpresskenya",
  storageBucket: "northexpresskenya.appspot.com",
  messagingSenderId: "498415498621",
  appId: "1:498415498621:web:0cc11cd5435df214edc814",
  measurementId: "G-MQXNWGXLNZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
