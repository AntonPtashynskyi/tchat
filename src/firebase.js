import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBvuLJnGtDsQL0FGJSEciz5RdRnOBV98UI",
  authDomain: "tchat-app-7e14c.firebaseapp.com",
  projectId: "tchat-app-7e14c",
  storageBucket: "tchat-app-7e14c.appspot.com",
  messagingSenderId: "855624705734",
  appId: "1:855624705734:web:a2778f867547892aead9c7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
