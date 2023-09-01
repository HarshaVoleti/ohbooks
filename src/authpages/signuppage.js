import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        // Store user details in Firestore
        const db = getFirestore();
        const usersCollection = collection(db, "users");
        const userData = {
          email: user.email,
          userId: user.uid,
        };

        addDoc(usersCollection, userData)
          .then(() => {
            // User is signed up and data is stored, redirect to home page
            navigate("/home");
          })
          .catch((error) => {
            // Handle Firestore data storage error
            console.error("Error storing user data:", error);
          });
      })
      .catch((error) => {
        // Handle signup error
        console.error("Signup error:", error);
      });
  };

  const handleLogin = () => {
    // Redirect to the login page
    navigate("/login");
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Signup</button>
      <div>
        <p>Already have an account?</p>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default SignupForm;
