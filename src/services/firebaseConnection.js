// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, initializeFirestore } from "firebase/firestore";
import { getAuth, initializeAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPnkLxg3in3YBteTXXBhqQa2FIQHUHKGw",
  authDomain: "portfolio-da8e7.firebaseapp.com",
  projectId: "portfolio-da8e7",
  storageBucket: "portfolio-da8e7.appspot.com",
  messagingSenderId: "608797651787",
  appId: "1:608797651787:web:cb90e4862fa95389d4eece"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {db,auth}