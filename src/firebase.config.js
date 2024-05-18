// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDn2tkJGDo60RyMz-1oUFIaWJw2Xevoyc",
  authDomain: "airtaska-authenticate.firebaseapp.com",
  projectId: "airtaska-authenticate",
  storageBucket: "airtaska-authenticate.appspot.com",
  messagingSenderId: "756623350641",
  appId: "1:756623350641:web:2c6eb9b56250114354f4d0",
  measurementId: "G-7JBQC82GVP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// Export signOut for usage in other components
export { signOut };
