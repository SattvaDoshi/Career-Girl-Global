import React from 'react';
import ebookCover from '../images/coverBook.png'; // Replace with the correct path to your image

const EbookPromotion = () => {
  return (
    <div className="bg-pink-100 min-h-screen flex items-center justify-center p-4">
      <div className="text-center max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
          {/* Image Section */}
          <div className="flex-shrink-0">
            <img
              src={ebookCover}
              alt="Boss Up E-Book"
              className="w-80 h-auto "
            />
          </div>
          {/* Text Section */}
          <div className="text-pink-600">
            <h2 className="text-4xl font-extrabold mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
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



