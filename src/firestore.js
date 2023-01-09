// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6y4LuKCice_KXaIwZk-yaatbRztqxa4E",
  authDomain: "todo-project-with-firebase.firebaseapp.com",
  projectId: "todo-project-with-firebase",
  storageBucket: "todo-project-with-firebase.appspot.com",
  messagingSenderId: "650904215772",
  appId: "1:650904215772:web:7295b8a007ab65e5545419"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const xx= getFirestore();

export default xx;