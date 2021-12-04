import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layouts/Header";
import Register from "./components/accounts/Register";
import Login from "./components/accounts/Login";
import Main from "./components/layouts/Main";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
