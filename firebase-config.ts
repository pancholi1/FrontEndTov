import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
export const firebaseConfig = {
  apiKey: "AIzaSyAZvh-3UhTqiBWQnGZ10BozVsHUz74ZQss",

  authDomain: "tovlogin.firebaseapp.com",

  projectId: "tovlogin",

  storageBucket: "tovlogin.appspot.com",

  messagingSenderId: "863702419631",

  appId: "1:863702419631:web:fe5d76cde7d727caf16c5a",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const database = getFirestore();
export const auth = getAuth();

export const providerGoogle = new GoogleAuthProvider();
