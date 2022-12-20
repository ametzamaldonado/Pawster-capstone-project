// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc_KXf_xhFd7clzEYA0m73kQ-bbFayn0Q",
  authDomain: "pawster-firebase.firebaseapp.com",
  projectId: "pawster-firebase",
  storageBucket: "pawster-firebase.appspot.com",
  messagingSenderId: "238900626619",
  appId: "1:238900626619:web:923c9ba4b10a118106959e",
  measurementId: "G-M7EY5CS70G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

