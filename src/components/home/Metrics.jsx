import React from 'react';

const Metrics = () => {
  return (
    // <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 p-8">
    //   <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">More About Us</h2>
    //   <div className="flex flex-col md:flex-row justify-around items-center w-full max-w-5xl bg-white shadow-md rounded-lg p-6">
    //     <div className="flex flex-col items-center text-center mb-6 md:mb-0 md:px-6">
    //       <span className="text-4xl md:text-5xl font-bold">300+</span>
    //       <span className="text-sm md:text-base">Students assisted with essay editing, scholarship search, inquiries, etc</span>
    //     </div>
    //     <span className="hidden md:block text-2xl mx-4">·</span>
    //     <div className="flex flex-col items-center text-center mb-6 md:mb-0 md:px-6">
    //       <span className="text-4xl md:text-5xl font-bold">38k</span>
    //       <span className="text-sm md:text-base">Members and followers across all our social media accounts</span>
    //     </div>
    //     <span className="hidden md:block text-2xl mx-4">·</span>
    //     <div className="flex flex-col items-center text-center mb-6 md:mb-0 md:px-6">
    //       <span className="text-4xl md:text-5xl font-bold">150+</span>
    //       <span className="text-sm md:text-base">Scholarships Posted</span>
    //     </div>
    //     <span className="hidden md:block text-2xl mx-4">·</span>
    //     <div className="flex flex-col items-center text-center md:px-6">
    //       <span className="text-4xl md:text-5xl font-bold">7</span>
    //       <span className="text-sm md:text-base">Giveaways Done</span>
    //     </div>
    //   </div>
    // </div>

    < >
           
      <div className="flex flex-row justify-around items-center w-full max-w-8xl bg-white shadow-md rounded-lg p-10 bg-gradient-to-r from-pink-500 to-purple-300">
           
        <div className="flex flex-col items-center text-center mx-4 ">

          <span className="text-5xl font-bold">300+</span>
          <span className="text-base mt-2">Content Posted</span>
          <span className="text-base mt-2">the volume of valuable content</span>
        </div>
        <span className="text-2xl mx-4 hidden md:block">·</span>
        <div className="flex flex-col items-center text-center mx-4">
          <span className="text-5xl font-bold">38k</span>
          <span className="text-base mt-2">Instagram Followers </span>
          <span className="text-base mt-2">across all our social media accounts</span>
        </div>
        <span className="text-2xl mx-4 hidden md:block">·</span>
        <div className="flex flex-col items-center text-center mx-4">
          <span className="text-5xl font-bold">150+</span>
          <span className="text-base mt-2">Community Growth</span>
          <span className="text-base mt-2">Number of active members in the community</span>
        </div>
        <span className="text-2xl mx-4 hidden md:block">·</span>
        <div className="flex flex-col items-center text-center mx-4">
          <span className="text-5xl font-bold">7</span>
          <span className="text-base mt-2">Success Stories</span>
          <span className="text-base mt-2">Number of success stories</span>
        </div>
        <span className="text-2xl mx-4 hidden md:block">·</span>
        <div className="flex flex-col items-center text-center mx-4">
          <span className="text-5xl font-bold">10</span>
          <span className="text-base mt-2">Resource Downloads</span>
          <span className="text-base mt-2">resume templates and other resources
downloaded.</span>
        </div>
      </div>
    </>
  );
};

export default Metrics;
