import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

// Initialize Firebase
const firebaseFire = () => {
  initializeApp(firebaseConfig);
};

export default firebaseFire;
