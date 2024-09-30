import React from 'react';

const Metrics = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center w-full max-w-8xl bg-pink-200 shadow-md rounded-lg p-10">
      <div className="flex flex-col items-center text-center mx-4 mb-6 md:mb-0">
        <span className="text-5xl font-bold text-pink-500" style={{ fontFamily: 'Abril FatFace' }}>80+</span>
        <span className="text-xl mt-2 text-pink-500" style={{ fontFamily: 'Abril FatFace' }}>Valuable posts shared</span>
        {/* <span className="text-base mt-2" style={{ fontFamily: 'Montserrat' }}>The volume of valuable content</span> */}
      </div>

      <div className="flex flex-col items-center text-center mx-4 mb-6 md:mb-0">
        <span className="text-5xl font-bold text-pink-500" style={{ fontFamily: 'Abril FatFace' }}>100k</span>
        <span className="text-xl mt-2 text-pink-500" style={{ fontFamily: 'Abril FatFace' }}>Instagram Followers</span>
        {/* <span className="text-base mt-2" style={{ fontFamily: 'Montserrat' }}>Across all our social media accounts</span> */}
      </div>

      <div className="flex flex-col items-center text-center mx-4 mb-6 md:mb-0">
        <span className="text-5xl font-bold text-pink-500" style={{ fontFamily: 'Abril FatFace' }}>1.6K</span>
        <span className="text-xl mt-2 text-pink-500" style={{ fontFamily: 'Abril FatFace' }}>LinkedIn Followers</span>
        {/* <span className="text-base mt-2" style={{ fontFamily: 'Montserrat' }}>Number of active members in the community</span> */}
      </div>

      <div className="flex flex-col items-center text-center mx-4 mb-6 md:mb-0">
        <span className="text-5xl font-bold text-pink-500" style={{ fontFamily: 'Abril FatFace' }}>100+</span>
        <span className="text-xl mt-2 text-pink-500" style={{ fontFamily: 'Abril FatFace' }}>Internship Opportunities</span>
        {/* <span className="text-base mt-2" style={{ fontFamily: 'Montserrat' }}>Number of success stories</span> */}
      </div>

      <div className="flex flex-col items-center text-center mx-4 mb-6 md:mb-0">
        <span className="text-5xl font-bold text-pink-500" style={{ fontFamily: 'Abril FatFace' }}>8M</span>
        <span className="text-xl mt-2 text-pink-500" style={{ fontFamily: 'Abril FatFace' }}>Lives reached on social media</span>
        {/* <span className="text-base mt-2" style={{ fontFamily: 'Montserrat' }}>Resume templates and other resources downloaded</span> */}
      </div>
    </div>
  );
};

export default Metrics;


