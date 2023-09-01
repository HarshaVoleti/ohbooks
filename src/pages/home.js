import React, { useState, useEffect } from "react";
import { auth } from "../authpages/firebase";
import { useNavigate } from "react-router-dom";
import Header from "../header";
import BookSearch from "../books";

const Home = () => {
  const [email, setEmail] = useState("");
  const [currentUser, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the currently logged-in user's email
    if (auth.currentUser) {
      setEmail(auth.currentUser.email);
      setUser(auth.currentUser);
    }
  }, []);

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        alert("logout failed");
        // Handle logout error
      });
  };

  return (
    <div>
      <Header></Header>
      <h2>Welcome to the homepage!</h2>
      <BookSearch></BookSearch>
    </div>
  );
};

export default Home;
