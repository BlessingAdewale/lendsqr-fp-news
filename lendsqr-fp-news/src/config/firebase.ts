import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyANG6Qbnkj7iSrpTLkIMhtw6tSa_I4lj34",
  authDomain: "lendsqr-fp-news-74df8.firebaseapp.com",
  projectId: "lendsqr-fp-news-74df8",
  storageBucket: "lendsqr-fp-news-74df8.firebasestorage.app",
  messagingSenderId: "903276492989",
  appId: "1:903276492989:web:e89862a1762f92a4225fd4",
  measurementId: "G-3GRXDZJN4T"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)
export default app;