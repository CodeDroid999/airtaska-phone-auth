// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAavfuOUEaH6LFCXLaeCFFRj0hzZBS7X5Y",
  authDomain: "airtaska-auth-service.firebaseapp.com",
  projectId: "airtaska-auth-service",
  storageBucket: "airtaska-auth-service.appspot.com",
  messagingSenderId: "1055034343573",
  appId: "1:1055034343573:web:3b2b012ae1ef4cb4241b9c",
  measurementId: "G-9LER5KR37J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
