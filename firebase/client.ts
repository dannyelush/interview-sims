import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPWoxMYdnTeQMswIT1sjNpw0tgfyWz6x0",
  authDomain: "interviewsims-74a87.firebaseapp.com",
  projectId: "interviewsims-74a87",
  storageBucket: "interviewsims-74a87.firebasestorage.app",
  messagingSenderId: "515297940295",
  appId: "1:515297940295:web:29d0af65502d78444c3262",
  measurementId: "G-YVTWNTH85M"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);