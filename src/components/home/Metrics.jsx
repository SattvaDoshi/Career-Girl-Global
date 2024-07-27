import React from 'react';

const Metrics = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center w-full max-w-8xl bg-pink-200 shadow-md rounded-lg p-10">
      <div className="flex flex-col items-center text-center mx-4 mb-6 md:mb-0">
        <span className="text-5xl font-bold text-pink-700">300+</span>
        <span className="text-base mt-2 text-pink-700">Content Posted</span>
        <span className="text-base mt-2">The volume of valuable content</span>
      </div>
      
      <div className="flex flex-col items-center text-center mx-4 mb-6 md:mb-0">
        <span className="text-5xl font-bold text-pink-700">38k</span>
        <span className="text-base mt-2 text-pink-700">Instagram Followers</span>
        <span className="text-base mt-2">Across all our social media accounts</span>
      </div>

      <div className="flex flex-col items-center text-center mx-4 mb-6 md:mb-0">
        <span className="text-5xl font-bold text-pink-700">150+</span>
        <span className="text-base mt-2 text-pink-700">Community Growth</span>
        <span className="text-base mt-2">Number of active members in the community</span>
      </div>
     
      <div className="flex flex-col items-center text-center mx-4 mb-6 md:mb-0">
        <span className="text-5xl font-bold text-pink-700">7</span>
        <span className="text-base mt-2 text-pink-700">Success Stories</span>
        <span className="text-base mt-2">Number of success stories</span>
      </div>
     
      <div className="flex flex-col items-center text-center mx-4 mb-6 md:mb-0">
        <span className="text-5xl font-bold text-pink-700">10</span>
        <span className="text-base mt-2 text-pink-700">Resource Downloads</span>
        <span className="text-base mt-2">Resume templates and other resources downloaded</span>
      </div>
    </div>
  );
};

export default Metrics;

