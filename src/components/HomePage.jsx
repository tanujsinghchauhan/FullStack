// src/components/HomePage.jsx
import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function HomePage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/background.jpeg')" }}
    >
      {/* Navbar */}
      <nav className="flex items-center justify-between p-4  text-white fixed top-0 w-full z-50">
        <div className="text-2xl font-bold font-mono whitespace-nowrap border-r-2 border-orange-500 pr-4 animate-typing">
          SpotFindr
        </div>
        <ul className="flex space-x-4 flex-grow justify-center">
          <li>
            <Link
              to="/"
              className="text-white text-lg px-4 py-2 hover:bg-gray-600 rounded font-mono transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/explore"
              className="text-white text-lg px-4 py-2 hover:bg-gray-600 rounded font-mono transition"
            >
              Explore
            </Link>
          </li>
        </ul>
        <Link
          to="/auth"
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 font-mono transition"
        >
          Login/Signup
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="flex items-center justify-center h-screen pt-32">
        <div className="bg-black bg-opacity-80 p-8 rounded-lg shadow-lg max-w-lg text-center">
          <p className="text-4xl text-gray-200 italic mb-8 font-serif">
            "Your Ideal Venue is just a Click Away."
          </p>
          <Link
            to="/explore"
            className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
