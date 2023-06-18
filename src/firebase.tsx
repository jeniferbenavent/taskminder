// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDy4Qi8rliGF2tmRwnCrcy58Q1wxUFkHj8",
  authDomain: "taskminder-729ea.firebaseapp.com",
  projectId: "taskminder-729ea",
  storageBucket: "taskminder-729ea.appspot.com",
  messagingSenderId: "85775787771",
  appId: "1:85775787771:web:f328dc917c430e866cb25e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);