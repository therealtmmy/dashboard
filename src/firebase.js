// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATlPQ79n5qPLKQMy5ws2vTnldv1powYjQ",
  authDomain: "udemy-accelerate.firebaseapp.com",
  projectId: "udemy-accelerate",
  storageBucket: "udemy-accelerate.appspot.com",
  messagingSenderId: "699101396697",
  appId: "1:699101396697:web:5da37c3d3400cdc54308c8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
