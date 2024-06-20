import React from 'react';
import logo from './images/your-logo.png'; // Adjust the path as needed
const GirlsOnCampus = () => {
  return (
    <div className="lg:min-h-screen md:h-[60vh] h-[70vh] bg-gradient-to-r from-pink-200 to-purple-200 flex flex-col items-center py-16 md:py-24 lg:py-32">
  <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-8">
    <div className="md:w-1/2 lg:w-2/3">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-pink-600 mb-6">Career Global Girl</h1>
      <p className="text-lg md:text-xl lg:text-xl text-gray-700 mb-8">
        At CGG, our mission is to empower young women in their early careers through support, mentorship, and a strong sense of community. We provide a safe and welcoming space where women can share their experiences, uplift each other, and grow both personally and professionally. Join us and take advantage of our resources to succeed in your career journey.
      </p>
      <button className="mt-6 bg-pink-500 text-white px-8 py-2 rounded-full hover:bg-pink-600 transition-colors duration-300">
        Join Us
      </button>
    </div>
    <div className="md:w-1/2 lg:w-1/3 flex justify-center mb-8 md:mb-0">
      <div className="relative">
        {/* <div className="w-48 h-48 bg-pink-300 rounded-full flex items-center justify-center">
          <span className="text-9xl text-white font-bold">G</span>
          <div className="absolute top-3 right-3 bg-white w-12 h-12 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0-6l-9-5m9 5l9-5" />
            </svg>
          </div>
        </div> */}
        <img src={logo} alt="Career Girl Global" className="h-60  md:ml-0" />
      </div>
    </div>
  </div>
</div>

  );
}

export default GirlsOnCampus;

