import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgeFJq8LCKAinN8VXFGJEGO1vOuVuHvrs",
  authDomain: "inventory-management-2daa5.firebaseapp.com",
  projectId: "inventory-management-2daa5",
  storageBucket: "inventory-management-2daa5.firebasestorage.app",
  messagingSenderId: "110654776450",
  appId: "1:110654776450:web:7d294d27dde0740377409b",
  measurementId: "G-6ZPSRM2QVN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user); 
      return result.user;
    } catch (error) {
      console.error("Error during sign-in:", error);
      throw error;
    }
  };
  
  export const signOutFromGoogle = async () => {
    try {
      await signOut(auth);
      console.log("User signed out successfully");
    } catch (error) {
      console.error("Error during sign-out:", error);
      throw error;
    }
  };
  
  export { auth, provider };