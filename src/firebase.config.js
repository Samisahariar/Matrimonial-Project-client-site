// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC07YRr-ARVfxrOUW5PFqWkcG_szONMAl8",
  authDomain: "car-project-e6661.firebaseapp.com",
  projectId: "car-project-e6661",
  storageBucket: "car-project-e6661.appspot.com",
  messagingSenderId: "164952832177",
  appId: "1:164952832177:web:bbae0909f9591a25438a90"
};

// Initialize Firebase
export const auth = getAuth(initializeApp(firebaseConfig));