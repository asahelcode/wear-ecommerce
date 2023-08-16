// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPqyNtUXtte18qFPNUaqMuFhBI_SqMBCc",
  authDomain: "ogip-6b968.firebaseapp.com",
  projectId: "ogip-6b968",
  storageBucket: "ogip-6b968.appspot.com",
  messagingSenderId: "403016259067",
  appId: "1:403016259067:web:af9384c6bf0afb66fc675e",
  measurementId: "G-CFG6DK7TVD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);