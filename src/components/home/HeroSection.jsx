import hero from '../images/womens.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import React from 'react';

const LandingPage = () => {
  return (
    <div
      className="bg-pink-300 min-h-[90vh] flex flex-col overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 flex-grow">
        <div className="max-w-3xl  pl-8 ">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-pink-600 mb-6 leading-tight">
            Empowering <br /> Women's Careers
          </h1>
          <p className="text-gray-700 text-lg md:text-xl mb-8">
            Welcome to CGG, a community where young women are empowered to achieve their career aspirations. 
            Join us and gain access to invaluable resources, career guidance, and a supportive network that 
            will help you navigate and excel in your professional journey.
          </p>
          <div className="flex flex-col md:flex-row md:space-x-4 gap-3">
            <a 
              href="https://www.instagram.com/careergirlglobal/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-pink-500 text-white px-12 py-3 rounded-full font-semibold flex items-center space-x-2
               hover:bg-pink-600 transition duration-300"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-lg" />
              <span>Instagram</span>
            </a>
            <a 
              href="https://www.linkedin.com/company/career-girl-global/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border-2 border-pink-500 text-pink-500 px-12 py-3 rounded-full font-semibold flex items-center space-x-2 hover:bg-pink-500 hover:text-white transition duration-300"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-lg" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
