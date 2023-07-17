import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Admin/Login";
import User from "./User/User";
import Home from "./Home/Home";
import Form from "./components/Form";
import SignupForm from "./components/SignupForm";
import validation from "./components/validation";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
    </>
  );
}

export default App;
