import React from 'react';
import about from '../images/about Us.jpg';



const Mission = () => {
  return (
    <div className="min-h-screen bg-white-900 flex flex-col items-center">
      {/* Navigation Bar
      <nav className="w-full bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="flex items-center">
            <img src="path-to-logo.png" alt="Logo" className="h-10" />
          </div>
          <div className="flex space-x-8">
            <a href="#" className="text-gray-900">Home</a>
            <a href="#" className="text-gray-900">About</a>
            <a href="#" className="text-gray-900">Contact</a>
            <a href="#" className="text-gray-900">Login</a>
          </div>
        </div>
      </nav> */}

      {/* Main Content */}
      <div className="container mx-auto flex flex-col items-center justify-center mt-10 px-6">
        <div className="bg-gradient-to-r from-pink-500 to-purple-200 p-8 rounded-lg shadow-lg w-full max-w-5xl">
          <div className="flex items-center">
            {/* <button className="bg-white text-gray-900 rounded-full p-2 shadow-md"> */}
            {/* <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> */}
            {/* <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path> */}
            {/* </svg> */}
            {/* </button> */}
            <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden mx-4 p-6 w-full">
              <img src={about} alt="About Us" className="w-48 h-48 object-cover rounded-full shadow-md" />
              <div className="mt-4 md:mt-0 md:ml-6">
                <h2 className="text-3xl font-bold text-gray-900">Mission</h2>
                <p className="mt-2 text-gray-700">
                  
                  At Career Girl Global, our mission is to ignite the potential of young women worldwide by
                  providing them with the essential tools, resources, and guidance to navigate their careers
                  with confidence and achieve outstanding success. We are dedicated to breaking down
                  systemic barriers that hinder women's professional growth and fostering a supportive,
                  empowering community where young women can   learn and thrive. By connecting women
                  with inspirational role models and providing access to a wealth of knowledge, we help
                  bridge the gap between ambition and achievement. Our focus on perpetual growth and
                  development ensures that our members continuously evolve and adapt to the everchanging demands of the global job market.
                  By offering comprehensive career development resources, we empower women to take
                  charge of their career journeys. We believe in the power of community and collaboration,
                  encouraging our members to support and uplift each other, creating a ripple effect of
                  empowerment. At CGG, we are not just preparing women for jobs; we are preparing them
                  for leadership, innovation, and meaningful impact in their chosen fields.
                </p>
              </div>
            </div>
            {/* <button className="bg-white text-gray-900 rounded-full p-2 shadow-md">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button> */}
          </div>
          {/* <div className="flex justify-center mt-4">
            <div className="w-2 h-2 bg-white rounded-full mx-1"></div>
            <div className="w-2 h-2 bg-white rounded-full mx-1"></div>
            <div className="w-2 h-2 bg-white rounded-full mx-1"></div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Mission;
