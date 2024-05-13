// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAME-5JmUzVQ8Ja9E-AzofWUewDoMp0PNk",
  authDomain: "recipeapp-23261.firebaseapp.com",
  projectId: "recipeapp-23261",
  storageBucket: "recipeapp-23261.appspot.com",
  messagingSenderId: "230434898299",
  appId: "1:230434898299:web:c60ce1ee03f1da798b3dde",
  measurementId: "G-BT787QG6RN"
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);