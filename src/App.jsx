// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import VenueBookingPage from "./components/VenueBookingPage";
import ExplorePage from "./components/ExplorePage";
import AuthPage from "./components/Authpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/booking/:id" element={<VenueBookingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
