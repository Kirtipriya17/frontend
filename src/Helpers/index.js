// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA14FUKDyQC2EmOD7Vigi-fY2Ovu_UeXrU",
  authDomain: "bookinggcar.firebaseapp.com",
  projectId: "bookinggcar",
  storageBucket: "bookinggcar.appspot.com",
  messagingSenderId: "82663952786",
  appId: "1:82663952786:web:62124070d2a9fcb604b14b",
  measurementId: "G-9109P70B9Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export {analytics}