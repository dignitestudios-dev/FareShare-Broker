// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_KEY,
  authDomain: "fareshare-app.firebaseapp.com",
  projectId: "fareshare-app",
  storageBucket: "fareshare-app.appspot.com",
  messagingSenderId: "887141039550",
  appId: "1:887141039550:web:3db8e577e65ff39e900def",
  measurementId: "G-14FJ7831MD",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
