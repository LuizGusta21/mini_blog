// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDo9jLgDRoDC3-YI_07ydelVZ3SyF2Sa-4",
  authDomain: "miniblog-7b71a.firebaseapp.com",
  projectId: "miniblog-7b71a",
  storageBucket: "miniblog-7b71a.appspot.com",
  messagingSenderId: "274701921665",
  appId: "1:274701921665:web:8e3b8bcd0e5ae9e776cc80",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
