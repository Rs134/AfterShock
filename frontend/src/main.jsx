import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // ✅ include routing here
import App from "./App.jsx"; // your homepage layout
import Signup from "./Components/Signup.jsx"; // import signup page
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* 🏠 Home page */}
        <Route path="/" element={<App />} />

        {/* ✍️ Signup page */}
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
