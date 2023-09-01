import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // Redirect to the homepage
        navigate("/home");
      })
      .catch((error) => {
        // Handle login error
      });
  };

  const handleSignup = () => {
    // Redirect to the signup page
    navigate("/signup");
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

      <button onClick={handleSubmit}>Login</button>
      <div>
        <p>Don't have an account?</p>
        <button onClick={handleSignup}>Signup</button>
      </div>
    </div>
  );
};

export default LoginForm;
