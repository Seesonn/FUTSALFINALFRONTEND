import React from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon, StarIcon } from 'lucide-react';

export function FutsalCard({ name, location, imageUrl, rating }) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
      <div className="p-0">
        <div className="relative h-40 sm:h-48 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold flex items-center">
            <StarIcon className="w-3 h-3 mr-1" />
            {rating}
          </div>
        </div>
        
        <div className="relative space-y-2 sm:space-y-3 p-3 sm:p-4">
          <div>
            <h3 className="text-lg sm:text-sm font-bold text-gray-800 truncate">{name}</h3>
            <p className="flex items-center text-xs sm:text-sm text-gray-600 mt-1">
              <MapPinIcon className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
              {location}
            </p>
          </div>
          
          <div className="flex items-center justify-between pt-2 sm:pt-3 border-t border-gray-200">
          <Link to="/booking"> <button className="px-4 py-2 bg-green-600 text-white rounded-md font-medium transition-all duration-300 hover:bg-green-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Book
            </button></Link>
           <Link to="/view"> <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-md font-medium transition-all duration-300 hover:bg-gray-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50">
              View 
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

