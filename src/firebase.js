import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAfSQU_CRZKA71y6pohAPTuxl0D_SECvzA",
  authDomain: "chats-23144.firebaseapp.com",
  projectId: "chats-23144",
  storageBucket: "chats-23144.appspot.com",
  messagingSenderId: "54961134399",
  appId: "1:54961134399:web:f13b308826b097eea7118a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();