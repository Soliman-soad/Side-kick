// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkNb-xEDFV7WKQIlV-5PYwvuHL0TJSFEc",
  authDomain: "sidekick-f1b2d.firebaseapp.com",
  projectId: "sidekick-f1b2d",
  storageBucket: "sidekick-f1b2d.appspot.com",
  messagingSenderId: "85131219658",
  appId: "1:85131219658:web:2fc391fbc6cc3e0c12da33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;