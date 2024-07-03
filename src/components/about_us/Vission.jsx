import React from 'react';
import about from '../images/about Us.jpg';



const Visssion = () => {
    return (
        <div className="min-h-screen bg-white-900 flex flex-col items-center bg-gradient-to-r from-pink-200 to-purple-200">
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
            <div className="container mx-auto flex flex-col items-center justify-center mt-40 px-6 ">
                <div className="bg-pink-500 p-8 rounded-lg shadow-lg w-full max-w-5xl ">
                    <div className="flex items-center">
                        {/* <button className="bg-white text-gray-900 rounded-full p-2 shadow-md"> */}
                        {/* <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> */}
                        {/* <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path> */}
                        {/* </svg> */}
                        {/* </button> */}
                        <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden mx-4 p-6 w-full ">
                            <img src={about} alt="About Us" className="w-48 h-48 object-cover rounded-full shadow-md" />
                            <div className="mt-4 md:mt-0 md:ml-6">
                                <h2 className="text-3xl font-bold text-gray-900">Vision</h2>
                                <p className="mt-2 text-gray-700">

                                    Our vision at Career Girl Global is to empower women worldwide to become influential
                                    leaders and innovators across all industries. We envision a future where every woman has
                                    equal opportunities for growth, education, and professional success. By fostering a
                                    supportive community and cultivating leadership skills, we aim to elevate women to
                                    positions of influence, driving positive change and fostering inclusive workplaces globally.
                                    We are committed to breaking down barriers and championing diversity, ensuring that
                                    women from all backgrounds can thrive and make impactful contributions to society. At
                                    Career Girl Global, we aspire to build a legacy of empowerment and excellence, where
                                    women are not only prepared for leadership but are also empowered to redefine the future
                                    of work with creativity and determination.

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

export default Visssion;
