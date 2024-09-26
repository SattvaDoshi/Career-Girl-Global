import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Star, Cloud, Sun } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-pink-200 to-pink-100 min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative">
        {/* Floating elements */}
        <Heart className="absolute -top-16 -left-16 text-pink-300 w-12 h-12 animate-bounce" />
        <Star className="absolute top-0 right-0 text-yellow-400 w-8 h-8 animate-pulse" />
        <Cloud className="absolute bottom-0 left-0 text-white w-16 h-16 animate-bob" />
        <Sun className="absolute -bottom-8 -right-8 text-yellow-300 w-20 h-20 animate-spin-slow" />
        
        <div className="text-center p-8 bg-white rounded-3xl shadow-2xl max-w-md relative z-10 border-4 border-pink-300">
          <div className="mb-6 relative">
            <Heart className="text-pink-500 w-32 h-32 animate-pulse mx-auto" />
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-2xl">404</span>
          </div>
          <h1 className="text-4xl font-bold text-pink-600 mb-4">Oopsie Daisy!</h1>
          <p className="text-xl text-pink-400 mb-6">
            We've looked everywhere, but this page seems to be playing hide and seek!
          </p>
          <p className="text-pink-600 mb-8 text-3xl">
            404 Not Found
          </p>
          <button
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-pink-400 to-pink-500 text-white py-3 px-8 rounded-full text-lg hover:from-pink-500 hover:to-pink-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 shadow-lg"
          >
            Let's Go Home! 🏠
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;