import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "loginvastraa.firebaseapp.com",
  projectId: "loginvastraa",
  storageBucket: "loginvastraa.firebasestorage.app",
  messagingSenderId: "213946538106",
  appId: "1:213946538106:web:cd7db7029aa26d170c83c3",
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export{ auth, provider}