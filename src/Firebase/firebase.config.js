// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXkZlhRno6_2tejn-uv1tyQO9hjXPaMms",
  authDomain: "food-valley-f5899.firebaseapp.com",
  projectId: "food-valley-f5899",
  storageBucket: "food-valley-f5899.appspot.com",
  messagingSenderId: "817360081242",
  appId: "1:817360081242:web:9477aa3cb32bd77ba5e363",
  measurementId: "G-Q7G606QQ61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;