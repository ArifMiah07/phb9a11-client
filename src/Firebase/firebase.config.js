// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfXvhocR4iFACKs0upxobGMF65lqvxEVU",
  authDomain: "smart-kidz-95c4e.firebaseapp.com",
  projectId: "smart-kidz-95c4e",
  storageBucket: "smart-kidz-95c4e.appspot.com",
  messagingSenderId: "748324090644",
  appId: "1:748324090644:web:2a07283cbe5444195e8801",
  measurementId: "G-Z3FW70Y3HT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
const analytics = getAnalytics(app);