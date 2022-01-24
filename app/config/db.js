import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseApp = initializeApp ({
  apiKey: "AIzaSyBX4-jkSXxPNi_PKreknk8DSxXLTTUoK1Q",
  authDomain: "bestfit-fb50b.firebaseapp.com",
  databaseURL: "https://bestfit-fb50b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bestfit-fb50b",
  storageBucket: "bestfit-fb50b.appspot.com",
  messagingSenderId: "753778354716",
  appId: "1:753778354716:web:a0b0bef28a40db15944dd9",
  measurementId: "G-NBQ3BNEBL0"
});

export const db = getFirestore(firebaseApp);
