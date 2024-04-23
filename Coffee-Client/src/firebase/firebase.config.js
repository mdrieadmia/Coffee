// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnC20DanpvxbeVbPAsEcHQUG1j5NzgugY",
  authDomain: "coffee-ed929.firebaseapp.com",
  projectId: "coffee-ed929",
  storageBucket: "coffee-ed929.appspot.com",
  messagingSenderId: "280638008612",
  appId: "1:280638008612:web:e2abb9f6c732aa61e697b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;