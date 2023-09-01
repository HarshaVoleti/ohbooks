import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // Replace with your Firebase project's configuration
  apiKey: "AIzaSyCmeuDdOFsMMVXmsIXSmzs0koQbqOQSHMM",
  authDomain: "bookquest-18b87.firebaseapp.com",
  projectId: "bookquest-18b87",
  storageBucket: "bookquest-18b87.appspot.com",
  messagingSenderId: "769433133818",
  appId: "1:769433133818:web:f82611bc843c6984575f43",
  measurementId: "G-5JNM45LKYT",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export default app;
