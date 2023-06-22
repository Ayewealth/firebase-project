// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8MINWHYjKO_dycYbx46NKVWyzewtUtW8",
  authDomain: "react-course-fb83d.firebaseapp.com",
  projectId: "react-course-fb83d",
  storageBucket: "react-course-fb83d.appspot.com",
  messagingSenderId: "1041574361001",
  appId: "1:1041574361001:web:a59e55b31f53130c0436b8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
