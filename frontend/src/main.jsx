import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // ✅ include routing here
import App from "./App.jsx"; // your homepage layout
import Signup from "./Components/Signup.jsx"; // import signup page
import Login from "./Components/Login.jsx"; // import login page
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />      
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
