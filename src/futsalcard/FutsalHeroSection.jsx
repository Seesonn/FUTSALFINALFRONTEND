import React from 'react';
import { Search } from 'lucide-react';
import img from '../assets/futsalpage.jpg';

// Custom Input component
const Input = ({ placeholder, className, ...props }) => (
  <input
    type="text"
    placeholder={placeholder}
    className={`w-full px-4 py-3 rounded-full border-2 border-green-100 bg-white/70 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition duration-200 ${className}`}
    {...props}
  />
);

// Custom Button component
const Button = ({ children, className, ...props }) => (
  <button
    className={`flex items-center justify-center px-6 py-3 font-semibold text-white bg-green-600 rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 shadow-lg hover:shadow-xl ${className}`}
    {...props}
  >
    {children}
  </button>
);

export function FutsalHeroSection() {
  return (
    <div className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${img})`,
          transform: "scale(1.1)" 
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-6 max-w-4xl text-4xl font-extrabold text-white md:text-5xl lg:text-6xl leading-tight">
          Discover and Book <span className="text-green-600">Premier Futsal Courts</span> Near You
        </h1>
        <p className="mb-8 max-w-2xl text-lg md:text-xl text-gray-200 font-medium">
          Experience the thrill of futsal on top-notch courts. Easy booking, great games!
        </p>
        
        <div className="flex w-full max-w-lg flex-col gap-4 sm:flex-row">
          <Input 
            placeholder="Enter your location..." 
            className="h-14 text-lg"
          />
          <Button className="h-14 px-8 text-lg whitespace-nowrap">
            <Search className="mr-2 h-5 w-5" />
            Find Courts
          </Button>
        </div>
        
        <div className="mt-12 flex space-x-6">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-white">50+</span>
            <span className="text-sm text-gray-300">Courts</span>
          </div>
          
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-white">10+</span>
            <span className="text-sm text-gray-300">Cities</span>
          </div>
        </div>
      </div>
    </div>
  );
}


