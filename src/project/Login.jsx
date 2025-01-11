
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logi from "../assets/is.png";
import bgImage from "../assets/ful.jpg";
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen w-full font-roboto flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Background"
          className="w-full h-full object-cover opacity-90"
        />
      </div>
      
      {/* Blur Overlay */}
      <div className="absolute inset-0 backdrop-blur-sm z-10"></div>
      
      {/* Content */}
      <div className="w-full max-w-4xl bg-green-100 bg-opacity-10 backdrop-blur-lg rounded-lg overflow-hidden flex flex-col md:flex-row shadow-lg z-20 m-4">
        {/* Form Container */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-6 text-center text-white">Login</h1>
          <form className="flex flex-col gap-4">
            <div className="relative">
              <input
                type="email"
                placeholder="login@gmail.com"
                className="w-full p-3 bg-[#ebf8ff] border-none rounded-md"
              />
            </div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="w-full p-3 bg-[#ebf8ff] border-none rounded-md"
              />
              <button
                type="button"
                className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-none border-none cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <Eye className="h-5 w-5 text-gray-400" />
                ) : (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
            <div className="flex justify-end">
              < Link to="/forget"className="text-sm text-white hover:underline">
                Forgot Password?
                </Link> 
            </div>
            <button className="w-full p-3 bg-[#04153F] text-white rounded-md flex items-center justify-center cursor-pointer hover:bg-[#04153F]/90 transition-colors">
              LOGIN
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-white">
            Don't have an account yet?{' '}
            <Link to="/register" className="text-white hover:underline">
              Sign up
            </Link>
          </p>
        </div>
        {/* Image Container */}
        <div className="hidden md:flex items-center justify-center w-full md:w-1/2">
          <img src={Logi} alt="player sisan" className="object-contain w-3/4 h-auto" />
        </div>
      </div>
    </div>
  );
}

