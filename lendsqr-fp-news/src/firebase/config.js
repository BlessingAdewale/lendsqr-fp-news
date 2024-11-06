// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANG6Qbnkj7iSrpTLkIMhtw6tSa_I4lj34",
  authDomain: "lendsqr-fp-news-74df8.firebaseapp.com",
  projectId: "lendsqr-fp-news-74df8",
  storageBucket: "lendsqr-fp-news-74df8.firebasestorage.app",
  messagingSenderId: "903276492989",
  appId: "1:903276492989:web:e89862a1762f92a4225fd4",
  measurementId: "G-3GRXDZJN4T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);