import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-pink-500 body-font">
      <div className="container mx-auto py-8 px-5 flex flex-wrap flex-col sm:flex-row items-center">
        <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-pink-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zm0 7v13m0-13l10-5-10-5m0 10L2 7m0 13v-6.5L12 17z"></path>
          </svg>
          <span className="ml-3 text-xl">Career Girl Global</span>
        </div>
        <p className="text-sm text-pink-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-pink-500 sm:py-2 sm:mt-0 mt-4">
          © 2023 Career Girl Global —
          <a href="" className="text-pink-600 ml-1" target="_blank" rel="noopener noreferrer">
          careergirlglobal@gmail.com 
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          {/* <a href="https://facebook.com" className="text-pink-500">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3c-1.1 0-2 .9-2 2v3H9v4h4v8h4v-8h3l1-4h-4V4h4z"></path>
            </svg>
          </a>
          <a href="https://twitter.com" className="ml-3 text-pink-500">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43 1a9 9 0 0 1-2.88 1.1 4.48 4.48 0 0 0-7.64 4.1A12.7 12.7 0 0 1 1.64 2 4.48 4.48 0 0 0 3 9.72a4.48 4.48 0 0 1-2-.56v.06a4.48 4.48 0 0 0 3.6 4.4 4.48 4.48 0 0 1-2 .07 4.48 4.48 0 0 0 4.18 3.1A9 9 0 0 1 1 20.54a12.7 12.7 0 0 0 6.88 2"></path>
            </svg>
          </a> */}
          <a href="https://www.instagram.com/careergirlglobal/" className="ml-3 text-pink-500">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37a4 4 0 1 1-7.44-1.87 4 4 0 0 1 7.44 1.87zm1.5-4.37h.01"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/career-girl-global/" className="ml-3 text-pink-500">
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
