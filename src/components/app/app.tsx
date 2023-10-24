import React from "react";
import app from "./app.module.css";
import { Routes, Route } from "react-router-dom";
import Main from "../main";
import Login from "../login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
