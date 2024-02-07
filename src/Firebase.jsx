import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.API_KEY,
  authDomain: import.meta.AUTH_DOMAIN,
  projectId: "chatweb-29f12",
  storageBucket: "chatweb-29f12.appspot.com",
  messagingSenderId: "1083036935901",
  appId: "1:1083036935901:web:87a612261e50dabf459d34",
  measurementId: "G-67PFVM6CLS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
