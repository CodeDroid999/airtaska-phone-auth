// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXWWK4eDca27Ywrv5wb5s0XV7FOSE1kMY",
  authDomain: "airtaska-18e8a.firebaseapp.com",
  projectId: "airtaska-18e8a",
  storageBucket: "airtaska-18e8a.appspot.com",
  messagingSenderId: "994864550546",
  appId: "1:994864550546:web:8b3ada161b3584e4454c4b",
  measurementId: "G-MJ1D6YPN8K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// Export signOut for usage in other components
export { signOut };
