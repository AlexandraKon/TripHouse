// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiiACNoVlJhy-447juDSlsiJmo54K9FtI",
  authDomain: "alexandra-triphouse.firebaseapp.com",
  projectId: "alexandra-triphouse",
  storageBucket: "alexandra-triphouse.appspot.com",
  messagingSenderId: "607276713542",
  appId: "1:607276713542:web:c5b1da6df33b396cfb6c47",
  measurementId: "G-P2J137HY8X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);