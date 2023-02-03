import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBhmCXJ4-6qOA_ryVJpPXwi77suC-vyCK0",
  authDomain: "shopping-app-cd303.firebaseapp.com",
  projectId: "shopping-app-cd303",
  storageBucket: "shopping-app-cd303.appspot.com",
  messagingSenderId: "716452541909",
  appId: "1:716452541909:web:2aaee4cc2861054e14f95c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
