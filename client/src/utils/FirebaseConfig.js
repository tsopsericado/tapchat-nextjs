import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC61JwEZpy2Nxt3Yze9yJSMLnmNzqyRnhg",
  authDomain: "whatsapp-clone-2f649.firebaseapp.com",
  projectId: "whatsapp-clone-2f649",
  storageBucket: "whatsapp-clone-2f649.appspot.com",
  messagingSenderId: "727930003471",
  appId: "1:727930003471:web:2540f4c432975748f1437a",
  measurementId: "G-1X32GBF851",
};

// Initialise firebase
const app = initializeApp(firebaseConfig);
export const firebase = getAuth(app);
