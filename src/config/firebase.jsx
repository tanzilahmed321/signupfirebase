import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBd-wxMxVQ7WblamjyEaVphg5HHxS3dJjw",
    authDomain: "fir-auth-c4422.firebaseapp.com",
    projectId: "fir-auth-c4422",
    storageBucket: "fir-auth-c4422.appspot.com",
    messagingSenderId: "724132945486",
    appId: "1:724132945486:web:b9bf71843b92400bbcad1f"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, ref, set };
