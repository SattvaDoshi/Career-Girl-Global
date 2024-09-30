import React from "react";
import ebookCover from '../images/coverBook.png';

const EbookRegistration = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-pink-100" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="text-center mb-6">
          <h2 
            className="text-pink-500 md:text-6xl text-3xl font-bold" 
            style={{ fontFamily: "'Abril FatFace', sans-serif" }}
          >
            Get the highlights of our Ebook!
          </h2>
        </div>
        <div className="flex items-center mb-8">
          <input
            type="email"
            placeholder="Enter E-mail"
            className="py-2 md:w-[30vw] w-[50vw] px-4 border border-gray-300 rounded-l-md focus:outline-black"
          />
          <button className="bg-pink-500 text-white py-2 px-6 rounded-r-md font-semibold">
            Register
          </button>
        </div>
      </div>
      <div className="relative md:right-11">
        <div className="flex items-center justify-center">
          <div className="bg-pink-300 rounded-full md:h-[70vh] md:w-[30vw] h-[40vh] w-[70vw] flex items-center justify-center">
            <img
              src={ebookCover}
              alt="E-book Cover"
              className="md:h-[70vh] md:w-[30vw] h-[40vh] w-[70vw]" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EbookRegistration;

