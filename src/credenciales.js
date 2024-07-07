// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx8QQ_DAin_FI9PiiPT4-McXPWtPBAnBM",
  authDomain: "tpdeportelogin.firebaseapp.com",
  projectId: "tpdeportelogin",
  storageBucket: "tpdeportelogin.appspot.com",
  messagingSenderId: "721227874373",
  appId: "1:721227874373:web:f10cb8c2e11fb02c74632c"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;