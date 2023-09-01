import logo from "./logo.svg";
import "./App.css";
import React from "react";
import LoginForm from "./authpages/loginpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupForm from "./authpages/signuppage";
import Home from "./pages/home";
import Header from "./header";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
