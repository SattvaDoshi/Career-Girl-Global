import yourImage from './images/founder.jpeg';
import React from 'react';

const AboutSection = () => (
  <section className="bg-pink-500 py-20">
    <div className="container mx-auto px-6 flex flex-col items-center">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl md:flex">
        <div className="md:w-1/2">
          <img src={yourImage} alt="About" className="w-full h-full object-cover md:h-auto" />
        </div>
        <div className="md:w-1/2 p-6">
          <h2 className="text-3xl font-bold text-pink-600 mb-4">About Founder</h2>
          <hr className="border-t-2 border-pink-500 w-12 mb-4" />
          <p className="text-gray-700 text-lg mb-6">
            Avisha is the visionary behind Career Girl Global (CGG). With a wealth of experience gained through various internships as a graphic designer and marketing intern, she has a deep understanding of the challenges and opportunities women face in their careers.
          </p>
          <p className="text-gray-700 text-lg mb-6">
            Avisha founded Career Girl Global because she sees incredible potential in all women to succeed, no matter the field they choose. Her mission is to create a powerful community where women can support and uplift each other. Through CGG, Avisha aims to build confidence and provide the resources necessary for women to thrive in their professional journeys.
          </p>
          
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;