// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"
import { getFirestore } from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAk-jFQ6wGf8BPvjAuzeG9fmrSHDRcxZ8k",
  authDomain: "archisapien-96163.firebaseapp.com",
  projectId: "archisapien-96163",
  storageBucket: "archisapien-96163.appspot.com",
  messagingSenderId: "248843008829",
  appId: "1:248843008829:web:3b9991f5e639b9f6d4a354",
  measurementId: "G-6MMZE94LD1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const db = getFirestore(app);