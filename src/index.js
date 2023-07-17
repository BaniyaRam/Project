import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Admin/Login';
import User from './User/User';
import Home from './Home/Home';
import SignupForm from './components/SignupForm';
import validation from './components/validation';
import SignupFormSuccess from './components/SignupFormSuccess';


ReactDOM.render(
  <Router>
    <React.StrictMode>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
        <Route path="/SignupForm" element={<SignupForm />} /> 

      </Routes>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
