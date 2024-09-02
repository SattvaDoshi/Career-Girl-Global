import React from 'react';
// import fullImage from './path_to_your_image.png'; // Update this path to where your image is stored
import pic1 from '../images/Photo1.jpeg'
import pic2 from '../images/Photo2.jpeg'
import pic3 from '../images/Photo3.jpeg'
import pic4 from '../images/Photo4.jpeg'
import pic5 from '../images/Photo5.jpeg'
import pic6 from '../images/Photo6.jpeg'
import pic7 from '../images/Photo7.jpeg'
import pic8 from '../images/Photo8.jpeg'
import pic9 from '../images/Photo9.jpeg'

const InstagramFeed = () => {
  return (
    <div className="bg-pink-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-4 md:p-6 w-full max-w-md shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram Logo" className="w-6 h-6 md:w-8 md:h-8" />
            <span className="font-bold text-pink-600 text-sm md:text-base">@careergirlglobal</span>
          </div>
          <a href="https://www.instagram.com/careergirlglobal/" target="_blank" rel="noopener noreferrer">
            <button className="bg-pink-500 text-white py-1 px-4 rounded-full text-xs md:text-sm">
              Follow Us
            </button>
          </a>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {/* Grid item */}
          <div className="relative w-full h-24 md:h-32 lg:h-40">
            <img
              src={pic1}
              alt="Instagram Post"
              className="w-full h-full object-cover rounded-lg"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="relative w-full h-24 md:h-32 lg:h-40">
            <img
              src={pic2}
              alt="Instagram Post"
              className="w-full h-full object-cover rounded-lg"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="relative w-full h-24 md:h-32 lg:h-40">
            <img
              src={pic3}
              alt="Instagram Post"
              className="w-full h-full object-cover rounded-lg"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="relative w-full h-24 md:h-32 lg:h-40">
            <img
              src={pic4}
              alt="Instagram Post"
              className="w-full h-full object-cover rounded-lg"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="relative w-full h-24 md:h-32 lg:h-40">
            <img
              src={pic5}
              alt="Instagram Post"
              className="w-full h-full object-cover rounded-lg"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="relative w-full h-24 md:h-32 lg:h-40">
            <img
              src={pic6}
              alt="Instagram Post"
              className="w-full h-full object-cover rounded-lg"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="relative w-full h-24 md:h-32 lg:h-40">
            <img
              src={pic7}
              alt="Instagram Post"
              className="w-full h-full object-cover rounded-lg"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="relative w-full h-24 md:h-32 lg:h-40">
            <img
              src={pic8}
              alt="Instagram Post"
              className="w-full h-full object-cover rounded-lg"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="relative w-full h-24 md:h-32 lg:h-40">
            <img
              src={pic9}
              alt="Instagram Post"
              className="w-full h-full object-cover rounded-lg"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramFeed;



