import React, { useState } from "react";
import { Link } from "react-router-dom";

import fgImage from "../assets/ful.jpg";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password recovery logic here
    console.log("Recovery email:", email);
    // we can add your API call or other logic here
  };

  return (
    <div className="min-h-screen w-full font-roboto flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={fgImage}
          alt="Background"
          className="w-full h-full object-cover opacity-90"
        />
      </div>

      {/* Blur Overlay */}
      <div className="absolute inset-0 backdrop-blur-sm z-10"></div>

      {/* Content */}
      <div className="w-full max-w-md bg-green-100 bg-opacity-10 backdrop-blur-lg rounded-lg overflow-hidden shadow-lg z-20 m-4">
        {/* Form Container */}
        <div className="w-full p-8 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-6 text-center text-white">
            Forgot Password
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full p-3 bg-[#ebf8ff] border-none rounded-md"
                required
              />
            </div>
            <Link to="/verify" className="w-full">
              <button
                type="submit"
                className="w-full p-3 bg-[#04153F] text-white rounded-md flex items-center justify-center cursor-pointer hover:bg-[#04153F]/90 transition-colors"
              >
                Recover Password
              </button>
            </Link>
          </form>
          <p className="mt-6 text-center text-sm text-white">
            Remember your password?{" "}
            <Link to="/login" className="text-white hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
