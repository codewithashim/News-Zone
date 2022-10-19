// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSW_h9nr8lbKes2C1rXTtAlY46i53Ustk",
  authDomain: "news-today-6205f.firebaseapp.com",
  projectId: "news-today-6205f",
  storageBucket: "news-today-6205f.appspot.com",
  messagingSenderId: "863502646176",
  appId: "1:863502646176:web:e37019fc082d3509c882c5",
  measurementId: "G-312K5YTDX5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;