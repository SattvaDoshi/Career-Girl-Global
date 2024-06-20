import React from 'react';

const Services = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-pink-500 p-8">
      <div className="flex items-center mb-8">

      </div>
      <h1 className="lg:text-6xl md:text-4xl text-3xl text-white font-bold mb-4">What we Bring to You ..</h1>
      <hr className="border-t-2 border-purple-100 w-16 mb-8" />
      <div className="flex flex-col md:flex-row justify-center mt-8 gap-8">
        <div className="flex flex-col items-center bg-white shadow-lg rounded-2xl p-8 max-w-xs mx-auto">
          <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full p-2">
            <img
              src="https://via.placeholder.com/100"
              alt="Mentorship Programs"
              className="rounded-full"
            />
          </div>
          <h2 className="text-2xl font-bold text-pink-600 mt-6 mb-4">Mentorship Programs</h2>
          <p className="text-center text-gray-700 mb-6">
            Our experienced mentors provide guidance and support to help you navigate your early career challenges.
          </p>
          <button className="bg-pink-500 text-white py-2 px-6 rounded-full hover:bg-pink-600 transition-colors duration-300">
            Learn More
          </button>
        </div>
        <div className="flex flex-col items-center bg-white shadow-lg rounded-2xl p-8 max-w-xs mx-auto">
          <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full p-2">
            <img
              src="https://via.placeholder.com/100"
              alt="Mentorship Programs"
              className="rounded-full"
            />
          </div>
          <h2 className="text-2xl font-bold text-pink-600 mt-6 mb-4">Mentorship Programs</h2>
          <p className="text-center text-gray-700 mb-6">
            Our experienced mentors provide guidance and support to help you navigate your early career challenges.
          </p>
          <button className="bg-pink-500 text-white py-2 px-6 rounded-full hover:bg-pink-600 transition-colors duration-300">
            Learn More
          </button>
        </div>
        <div className="flex flex-col items-center bg-white shadow-lg rounded-2xl p-8 max-w-xs mx-auto">
          <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full p-2">
            <img
              src="https://via.placeholder.com/100"
              alt="Mentorship Programs"
              className="rounded-full"
            />
          </div>
          <h2 className="text-2xl font-bold text-pink-600 mt-6 mb-4">Mentorship Programs</h2>
          <p className="text-center text-gray-700 mb-6">
            Our experienced mentors provide guidance and support to help you navigate your early career challenges.
          </p>
          <button className="bg-pink-500 text-white py-2 px-6 rounded-full hover:bg-pink-600 transition-colors duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
