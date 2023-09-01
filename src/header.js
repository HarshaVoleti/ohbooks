import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./authpages/firebase";
import { useState, useEffect } from "react";
import logo from "../src/assets/logo.svg";
import "./index.css";
import bag from "../src/assets/bag.svg";
import search from "./assets/search.svg";
const Header = () => {
  const [email, setEmail] = useState("");
  const [currentUser, setUser] = useState({});
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const navigate = useNavigate();

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        setUser(null);
        navigate("/");
      })
      .catch((error) => {
        alert("logout failed");
        // Handle logout error
      });
  };
  const handleSignup = () => {
    // Redirect to the signup page
    navigate("/signup");
  };
  const handleLogin = () => {
    // Redirect to the login page
    navigate("/login");
  };

  return (
    <div className="header">
      <div className="logo">
        <div className="w">
          <img src={logo}></img>
        </div>
        <h1 className="head">
          Oh.
          <span className="oh">Books</span>
        </h1>
      </div>
      <div>
        <input
          className="inp"
          placeholder="Search by name, Author and genre"
        ></input>
      </div>
      <div>
        {!currentUser ? (
          <div className="profile">
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleSignup}>Sign Up</button>
          </div>
        ) : (
          <div className="profile">
            <img src={bag}></img>
            <button onClick={handleLogout}>Logout {email}</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
