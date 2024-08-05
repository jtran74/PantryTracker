// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_UpvQqHO8ZEOoyEd9DpNwhkuClW1nY4E",
  authDomain: "inventorymanagement-73b04.firebaseapp.com",
  projectId: "inventorymanagement-73b04",
  storageBucket: "inventorymanagement-73b04.appspot.com",
  messagingSenderId: "461186664606",
  appId: "1:461186664606:web:7dc92ef009992c24f5538f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}