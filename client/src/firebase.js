
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDb3U5qXIiQt8G9akCYHkbcQBW4SVEEORM",
  authDomain: "practice-28092.firebaseapp.com",
  databaseURL: "https://practice-28092-default-rtdb.firebaseio.com",
  projectId: "practice-28092",
  storageBucket: "practice-28092.appspot.com",
  messagingSenderId: "203919752883",
  appId: "1:203919752883:web:3aa2b6325089da165b7ac6",
  measurementId: "G-4NTH569EW0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);