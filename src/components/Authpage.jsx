import React, { useState } from "react";
import { Link } from "react-router-dom";

function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/background.jpeg')" }}
    >
      <div className="w-full max-w-md bg-black bg-opacity-80 rounded-lg shadow-2xl p-8">
        <h2 className="text-4xl text-orange font-bold text-center text-orange-500 mb-6">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h2>
        <form className="space-y-6">
          {!isSignIn && (
            <div className="relative">
              <input
                type="text"
                name="username"
                placeholder="Username"
                required
                className="w-full p-4 bg-gray-800 border border-gray-600 text-white rounded-md focus:outline-none focus:border-orange-500 placeholder-gray-400"
              />
            </div>
          )}
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full p-4 bg-gray-800 border border-gray-600 text-white rounded-md focus:outline-none focus:border-orange-500 placeholder-gray-400"
            />
          </div>
          <div className="relative">
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="w-full p-4 bg-gray-800 border border-gray-600 text-white rounded-md focus:outline-none focus:border-orange-500 placeholder-gray-400"
            />
          </div>
          <button
            type="submit"
            className="w-full p-4 bg-orange-500 text-black font-semibold rounded-md hover:bg-orange-600 transition duration-300"
          >
            {isSignIn ? "Login" : "Sign Up"}
          </button>
        </form>
        <div className="text-center mt-6">
          <p className="text-gray-400">
            {isSignIn ? "Don't have an account?" : "Already have an account?"}
            <button
              onClick={toggleForm}
              className="ml-2 text-orange-500 font-bold hover:underline"
            >
              {isSignIn ? "Sign Up" : "Sign In"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
