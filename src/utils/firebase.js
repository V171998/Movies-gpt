
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAO-XOgIB1fcQ3rTkfMOaa--5WtXV6OHBo",
  authDomain: "movies-gpt-d6890.firebaseapp.com",
  projectId: "movies-gpt-d6890",
  storageBucket: "movies-gpt-d6890.firebasestorage.app",
  messagingSenderId: "485438910632",
  appId: "1:485438910632:web:ff02a73c7554965f2d529d",
  measurementId: "G-V74SKY31E0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


 export const auth = getAuth();