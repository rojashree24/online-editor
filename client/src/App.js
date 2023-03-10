import React from "react";
import Home from "./Components/Home";
// import Login from './Components/Pages/Login'
import WebEditor from "./Components/WebEditor";
import MarkdownEditor from "./Components/MarkdownEditor";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/Pages/HomePage";
import Login from "./Components/Pages/Login";
import Register from "./Components/Pages/Register";
        
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="/web" element={<WebEditor />} />
        <Route path="/markdown" element={<MarkdownEditor />} />
      </Routes>
    </Router>
  );
}

export default App;
