import React from 'react';
import ebookCover from '../images/coverBook.png'; 

const EbookPromotion = () => {
  return (
    <div className="bg-pink-100  flex items-center justify-center min-w-full">
      <div className="text-center">
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen">
          <div className="">
            <img
              src={ebookCover}
              alt="Boss Up E-Book"
              className="md:w-[40vw] md:h-[80vh] p-4 "
            />
          </div>
          <div className="text-pink-600">
            <h2 className="md:text-6xl text-3xl font-extrabold mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Our E-Book is on Air!!
            </h2>
            <button
              className="bg-pink-500 text-white py-3 px-8 rounded-full text-lg mt-4"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 'bold' }}
            >
              Get yours now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EbookPromotion;



